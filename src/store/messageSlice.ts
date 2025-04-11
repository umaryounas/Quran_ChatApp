import {
  createAsyncThunk,
  createSlice,
  Dispatch,
  PayloadAction,
} from '@reduxjs/toolkit';
import {Chat, Message} from './chatSlice';
import auth from '@react-native-firebase/auth';
import {RootState, useAppDispatch} from './store';
import firestore, {Timestamp} from '@react-native-firebase/firestore';
import {fetchMessageAction, subscribeMessage} from './subscribeMessage';
import {createLoadingActions} from './loading-actions';

interface MessageState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}
const initialState: MessageState = {
  messages: [],
  isLoading: false,
  error: null,
};

export const fetchAllMessagesAction =
  createLoadingActions<Array<Message>>('fetchAllMessages');

export const fetchAllMessages = (payload: {chatId: string}) => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    const currentUser = auth().currentUser;
    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    try {
      const chatsSnapshot = await firestore()
        .collection('users')
        .doc(currentUser.uid)
        .collection('chats')
        .doc(`${payload.chatId}`)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .get();

      const messages: Array<Message> = chatsSnapshot.docs.map(doc => ({
        id: doc.id,
        message: doc.data().message,
        chatId: doc.data().chatId,
        role: doc.data().role,
        timestamp: doc.data().timestamp,
      })) as any;

      dispatch(subscribeMessage({chatId: payload.chatId}));
      dispatch(fetchAllMessagesAction.fulfilled(messages));
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  };
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    clearMessages: state => {
      state.messages = [];
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllMessagesAction.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllMessagesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
      })
      .addCase(fetchAllMessagesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message || 'Failed to fetch messages';
      })
      .addCase(fetchMessageAction.fulfilled, (state, action) => {
        if (action.payload) {
          state.isLoading = true;
          state.messages = [...state.messages, action.payload];
        }
      });
  },
});

export const {clearMessages} = messageSlice.actions;
export const selectMessages = (state: RootState) => state.message.messages;
export const selectIsLoading = (state: RootState) => state.message.isLoading;
export const selectError = (state: RootState) => state.message.error;
export default messageSlice.reducer;
