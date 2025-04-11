import {createAsyncThunk, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {Message} from './chatSlice';
import {createLoadingActions} from './loading-actions';
import {RootState} from './store';
import auth from '@react-native-firebase/auth';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export const fetchMessageAction =
  createLoadingActions<Message>('subscribeMessage');

// ---------------------------------------------------------
let databaseQuery: FirebaseFirestoreTypes.Query | undefined = undefined;

export const subscribeMessage = (payload: {chatId: string}) => {
  return async (
    dispatch: Dispatch<PayloadAction<any>>,
    getState: () => RootState,
  ) => {
    console.log('====__==');
    const currentUser = auth().currentUser;
    if (!currentUser) {
      throw new Error('User not authenticated');
    }
    // initiate listener
    if (databaseQuery === undefined) {
      databaseQuery = firestore()
        .collection('users')
        .doc(currentUser.uid)
        .collection('chats')
        .doc(payload.chatId)
        .collection('messages')
        .limitToLast(1);
    }

    databaseQuery.orderBy('timestamp', 'asc').onSnapshot(
      snapshot => {
        const newMessages = snapshot.docs.map(doc => ({
          id: doc.id,
          message: doc.data().message,
          chatId: doc.data().chatId,
          role: doc.data().role,
          timestamp: doc.data().timestamp,
        }));
        console.log('======', newMessages);
        // Update messages in Redux store
        dispatch(fetchMessageAction.fulfilled(newMessages[0]));
      },
      error => {
        console.error('Error listening to messages:', error);
      },
    );
  };
};

// turn of all listeners
export const unsubscribeMessageQuery = () => {
  return (dispatch: Dispatch<PayloadAction<any>>) => {
    databaseQuery = undefined;
  };
};
