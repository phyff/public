import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/storage';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyBQ45K6tmg-PUiQnXcaOPbDAfzTmeVDMbA',
  authDomain: 'phyff-dea73.firebaseapp.com',
  databaseURL: 'https://phyff-dea73.firebaseio.com',
  projectId: 'phyff-dea73',
  storageBucket: 'phyff-dea73.appspot.com',
  messagingSenderId: '504901127886',
  appId: '1:504901127886:web:d462db15b3072bd1ca8a9f',
  measurementId: 'G-L593Z52SFT',
});
firebase.analytics();

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
