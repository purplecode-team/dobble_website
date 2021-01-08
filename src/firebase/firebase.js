import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCPTz-FtrBKKF8LPmTloynxayC7RtGJus4',
  authDomain: 'doble-d08a9.firebaseapp.com',
  databaseURL: 'https://doble-d08a9.firebaseio.com',
  projectId: 'doble-d08a9',
  storageBucket: 'doble-d08a9.appspot.com',
  messagingSenderId: '670070936445',
  appId: '1:670070936445:web:349fe2e62a25feb874f214',
  measurementId: 'G-NWDRGD0XJE',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
