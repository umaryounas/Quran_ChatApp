import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthState, RejectState} from './states';
import {User} from '../data/models/domain/user';
import {UserDtoMapper} from '../data/mappers/auth-dto-mapper';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number | null;
  gender: string;
  quranConnection: string;
  religiousBackground: string;
  prayerFrequency: string;
  quranReadingFrequency: string;
  createdAt: Date;
  updatedAt: Date;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: '',
  isAuthenticated: false,
};

const userDtoMapper = new UserDtoMapper();

// Create async thunk for user creation
export const createUser = createAsyncThunk<
  User,
  {
    email: string;
    password: string;
    userData: Omit<UserData, 'createdAt' | 'updatedAt'>;
  },
  RejectState
>(
  'auth/createUser',
  async (
    payload: {
      email: string;
      password: string;
      userData: Omit<UserData, 'createdAt' | 'updatedAt'>;
    },
    {rejectWithValue},
  ) => {
    try {
      // Create user in Firebase Auth
      const userCredential = await auth().createUserWithEmailAndPassword(
        payload.email,
        payload.password,
      );

      // Prepare user data for Firestore
      const userDocData: UserData = {
        ...payload.userData,
        email: payload.email,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Create user document in Firestore
      await firestore()
        .collection('users')
        .doc(userCredential.user.uid)
        .set(userDocData);

      // Store user data in AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(userDocData));
      await AsyncStorage.setItem('isLoggedIn', 'true');

      return userDtoMapper.mapToDomainModel(userCredential.user);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

// Create async thunk for sign in
export const signIn = createAsyncThunk<
  User,
  {email: string; password: string},
  RejectState
>(
  'auth/signIn',
  async (payload: {email: string; password: string}, {rejectWithValue}) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        payload.email,
        payload.password,
      );

      // Fetch user data from Firestore
      const userDoc = await firestore()
        .collection('users')
        .doc(userCredential.user.uid)
        .get();

      if (!userDoc.exists) {
        throw new Error('User document not found');
      }
      return userDtoMapper.mapToDomainModel(userCredential.user);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, {rejectWithValue, dispatch}) => {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem('user');
      dispatch(logoutUser());
      return null;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const checkAuthStatus = createAsyncThunk(
  'auth/checkAuthStatus',
  async (_, {rejectWithValue, dispatch}) => {
    try {
      const currentUser = auth().currentUser;
      if (currentUser) {
        const userDoc = await firestore()
          .collection('users')
          .doc(currentUser.uid)
          .get();

        if (userDoc.exists) {
          dispatch(setUser(userDtoMapper.mapToDomainModel(currentUser)));
          return true;
        }
      }
      return false;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = '';
      state.isAuthenticated = true;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logoutUser: state => {
      state.user = null;
      state.error = '';
      state.isAuthenticated = false;
      // Clear AsyncStorage on logout
      AsyncStorage.removeItem('userData');
      AsyncStorage.removeItem('isLoggedIn');
    },
  },
  extraReducers: builder => {
    builder
      // Create User cases
      .addCase(createUser.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message as string;
      })
      // Sign In cases
      .addCase(signIn.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as unknown as string;
      })
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = '';
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(checkAuthStatus.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = action.payload;
      })
      .addCase(checkAuthStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {setUser, setLoading, setError, logoutUser} = authSlice.actions;
export default authSlice.reducer;
