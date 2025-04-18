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
  async (
    payload: {email: string; password: string},
    {rejectWithValue, dispatch},
  ) => {
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

      console.log('userDoc ----> ', userDoc);
      if (!userDoc.exists) {
        throw new Error('User document not found');
      }
      dispatch(checkAuthStatus());
      return userDtoMapper.mapToDomainModel(userCredential.user);
    } catch (error: any) {
      console.log('error ----> ', error);

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

// import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
// import {auth, db} from '../config/firebaseConfig';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from 'firebase/auth';
// import {doc, setDoc, getDoc} from 'firebase/firestore';
// import {User} from '../data/models/domain/user';
// import {UserDtoMapper} from '../data/mappers/auth-dto-mapper';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Interface for the user data
// interface UserData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   age: number | null;
//   gender: string;
//   quranConnection: string;
//   religiousBackground: string;
//   prayerFrequency: string;
//   quranReadingFrequency: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

// // Initial state for the auth slice
// interface AuthState {
//   user: User | null;
//   loading: boolean;
//   error: string;
//   isAuthenticated: boolean;
// }

// const initialState: AuthState = {
//   user: null,
//   loading: false,
//   error: '',
//   isAuthenticated: false,
// };

// // Mapper instance
// const userDtoMapper = new UserDtoMapper();

// // Async thunk for user creation
// export const createUser = createAsyncThunk<
//   User,
//   {
//     email: string;
//     password: string;
//     userData: Omit<UserData, 'createdAt' | 'updatedAt'>;
//   },
//   {rejectValue: string}
// >('auth/createUser', async (payload, {rejectWithValue}) => {
//   try {
//     if (!auth) {
//       throw new Error('Firebase Auth is not initialized');
//     }
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       payload.email,
//       payload.password,
//     );

//     const userDocData = userDtoMapper.mapUserDataToFirestoreDoc(
//       payload.userData,
//     );
//     await setDoc(doc(db, 'users', userCredential.user.uid), userDocData);

//     await AsyncStorage.setItem(
//       'user',
//       JSON.stringify({
//         uid: userCredential.user.uid,
//         email: userCredential.user.email!,
//         firstName: payload.userData.firstName,
//         lastName: payload.userData.lastName,
//       }),
//     );

//     return {
//       uid: userCredential.user.uid,
//       email: userCredential.user.email!,
//       firstName: payload.userData.firstName,
//       lastName: payload.userData.lastName,
//     };
//   } catch (error: any) {
//     return rejectWithValue(error.message || 'An unexpected error occurred');
//   }
// });

// // Async thunk for user sign-in
// export const signIn = createAsyncThunk<
//   User,
//   {email: string; password: string},
//   {rejectValue: string}
// >('auth/signIn', async (payload, {rejectWithValue}) => {
//   try {
//     if (!auth) {
//       throw new Error('Firebase Auth is not initialized');
//     }
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       payload.email,
//       payload.password,
//     );

//     const userDocRef = doc(db, 'users', userCredential.user.uid);
//     const userSnapshot = await getDoc(userDocRef);

//     if (userSnapshot.exists()) {
//       await AsyncStorage.setItem(
//         'user',
//         JSON.stringify({
//           uid: userCredential.user.uid,
//           email: userCredential.user.email!,
//           firstName: userSnapshot.data().firstName,
//           lastName: userSnapshot.data().lastName,
//         }),
//       );

//       return {
//         uid: userCredential.user.uid,
//         email: userCredential.user.email!,
//         firstName: userSnapshot.data().firstName,
//         lastName: userSnapshot.data().lastName,
//       };
//     } else {
//       throw new Error('No user data found');
//     }
//   } catch (error: any) {
//     return rejectWithValue(error.message || 'An unexpected error occurred');
//   }
// });

// // Async thunk for sign-out
// export const signOutUser = createAsyncThunk(
//   'auth/signOut',
//   async (_, {rejectWithValue}) => {
//     try {
//       if (!auth) {
//         throw new Error('Firebase Auth is not initialized');
//       }
//       await signOut(auth);
//       await AsyncStorage.removeItem('user');
//     } catch (error: any) {
//       return rejectWithValue(error.message || 'An unexpected error occurred');
//     }
//   },
// );

// // Async thunk to initialize user session from AsyncStorage on app startup
// export const initializeUser = createAsyncThunk(
//   'auth/initializeUser',
//   async (_, {rejectWithValue}) => {
//     try {
//       const userString = await AsyncStorage.getItem('user');
//       if (userString) {
//         const user = JSON.parse(userString);
//         return user;
//       }
//       return null;
//     } catch (error: any) {
//       return rejectWithValue(error.message || 'Failed to load user data');
//     }
//   },
// );

// // Creating the auth slice
// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(initializeUser.fulfilled, (state, action) => {
//         if (action.payload) {
//           state.user = action.payload;
//           state.isAuthenticated = true;
//         }
//       })
//       .addCase(initializeUser.rejected, (state, action) => {
//         state.error = action.payload as string;
//       })
//       .addCase(createUser.pending, state => {
//         state.loading = true;
//       })
//       .addCase(createUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//       })
//       .addCase(createUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })
//       .addCase(signIn.pending, state => {
//         state.loading = true;
//       })
//       .addCase(signIn.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//       })
//       .addCase(signIn.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })
//       .addCase(signOutUser.pending, state => {
//         state.loading = true;
//       })
//       .addCase(signOutUser.fulfilled, state => {
//         state.loading = false;
//         state.user = null;
//         state.isAuthenticated = false;
//       })
//       .addCase(signOutUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export default authSlice.reducer;
