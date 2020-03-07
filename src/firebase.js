import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHS63HOF6hOE7rYnFiu1eVAp4ZYggRRLc',
  authDomain: 'vue-firebase-auth-demo-app.firebaseapp.com',
  databaseURL: 'https://vue-firebase-auth-demo-app.firebaseio.com',
  projectId: 'vue-firebase-auth-demo-app',
  storageBucket: 'vue-firebase-auth-demo-app.appspot.com',
  messagingSenderId: '672781673836',
  appId: '1:672781673836:web:5fa6c1e8e0a32cf3813f49',
  measurementId: 'G-BFKPC6VJN3',
};

firebase.initializeApp(firebaseConfig);
