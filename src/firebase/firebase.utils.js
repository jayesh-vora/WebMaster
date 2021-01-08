import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBYGJumZOBPYKqHzWY7-toNyopx8DbanPw",
  authDomain: "crown-db-2a186.firebaseapp.com",
  databaseURL: "https://crown-db-2a186.firebaseio.com",
  projectId: "crown-db-2a186",
  storageBucket: "crown-db-2a186.appspot.com",
  messagingSenderId: "397333978682",
  appId: "1:397333978682:web:f62dba969d519b9c1e1f03",
  measurementId: "G-B561J3TF5Z"
}


firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




