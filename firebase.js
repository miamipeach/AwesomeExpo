// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA8I66hTxK79o6HtFhKoG7szzW0WspmN1k',
  authDomain: 'react-native-todo-app-481ef.firebaseapp.com',
  projectId: 'react-native-todo-app-481ef',
  storageBucket: 'react-native-todo-app-481ef.appspot.com',
  messagingSenderId: '550031795787',
  appId: '1:550031795787:web:3f0427cfbf720dd8b74fce',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
