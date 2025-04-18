import {initializeApp, getApps, getApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCPbxSG4G0lfRzbd0wgxK4TXcyqlGF9ft4',
  authDomain: 'quranchat-baa46.firebaseapp.com',
  projectId: 'quranchat-baa46',
  storageBucket: 'quranchat-baa46.firebasestorage.app',
  messagingSenderId: '467189020444',
  appId: '1:467189020444:web:cfc33709eec010e2cfecd9',
  measurementId: 'G-GZT0VR0597',
};
// Initialize Firebase only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};
