import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  Dispatch,
} from '@reduxjs/toolkit';
import {RootState, store, useAppDispatch} from './store';
import firestore, {Timestamp} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {fetchAllMessages} from './messageSlice';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  timestamp: number;
  chatId: string;
  message?: string;
}

export interface Chat {
  id: string;
  title: string;
  timestamp: number;
}

interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  currentChatId: string;
  currentTopic: string | null;
  allTopics: Array<Chat> | null;
}

const initialState: ChatState = {
  messages: [],
  isLoading: false,
  error: null,
  currentChatId: '',
  currentTopic: null,
  allTopics: [],
};

export const fetchAllChats = createAsyncThunk(
  'chat/fetchAllChats',
  async (_, {getState}) => {
    const state = getState() as RootState;
    const currentUser = auth().currentUser;

    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    try {
      const chatsSnapshot = await firestore()
        .collection('users')
        .doc(currentUser.uid)
        .collection('chats')
        .orderBy('timestamp', 'asc')
        .get();

      const chats: Array<Chat> = chatsSnapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        timestamp: doc.data().timestamp,
      })) as any;

      return chats;
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  },
);

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async ({message}: {message: string; chatId?: string}, {getState}) => {
    const state = store.getState()?.chat;
    const currentUser = auth().currentUser;
    const dispatch: Dispatch<any> = store.dispatch;
    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    try {
      // Get assistant response
      const newChatId: string =
        state.currentChatId == '' ||
        state.currentChatId == null ||
        state.currentChatId == undefined
          ? Date.now().toString()
          : state.currentChatId;

      // Create message objects
      const userMessage: Message = {
        id: Date.now().toString(),
        message: message,
        role: 'user',
        timestamp: Date.now(),
        chatId: newChatId,
      };

      // Save messages to Firestore
      const userRef = firestore().collection('users').doc(currentUser.uid);

      // Save user message
      if (!state.currentChatId) {
        await userRef
          .collection('chats')
          .doc(newChatId)
          .set({id: newChatId, timestamp: Date.now(), title: message});
      }

      await userRef
        .collection('chats')
        .doc(newChatId)
        .collection('messages')
        .doc(Date.now().toString())
        .set(userMessage);
      // Fetch all messages for the current chat
      if (
        state.currentChatId == '' ||
        state.currentChatId == null ||
        state.currentChatId == undefined
      ) {
        dispatch(fetchAllMessages({chatId: newChatId}));
        dispatch(setCurrentChat(newChatId));
      }

      return userMessage;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    clearChat: state => {
      state.messages = [];
      state.currentChatId = '';
      state.error = null;
      state.currentTopic = null;
    },
    setCurrentChat: (state, action: PayloadAction<string>) => {
      state.currentChatId = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // Fetch Messages
      .addCase(fetchAllChats.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllChats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allTopics = action.payload;
      })
      .addCase(fetchAllChats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch messages';
      })
      // Send Message
      .addCase(sendMessage.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages.push(action.payload);
        // Set the first message as the topic if it's not already set
        if (!state.currentTopic) {
          state.currentTopic = action.payload.message ?? '';
        }
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to send message';
      });
  },
});

export const {clearChat, setCurrentChat} = chatSlice.actions;
export const selectIsLoading = (state: RootState) => state.chat.isLoading;
export const selectError = (state: RootState) => state.chat.error;
export const selectCurrentTopic = (state: RootState) => state.chat.currentTopic;
export const selectAllTopic = (state: RootState) => state.chat.allTopics;
export const selectCurrentChatId = (state: RootState) =>
  state.chat.currentChatId;

export default chatSlice.reducer;
