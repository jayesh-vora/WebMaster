import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBYGJumZOBPYKqHzWY7-toNyopx8DbanPw",
  authDomain: "crown-db-2a186.firebaseapp.com",
  databaseURL: "https://crown-db-2a186.firebaseio.com",
  projectId: "crown-db-2a186",
  storageBucket: "crown-db-2a186.appspot.com",
  messagingSenderId: "397333978682",
  appId: "1:397333978682:web:f62dba969d519b9c1e1f03",
  measurementId: "G-B561J3TF5Z"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const collectionRef = firestore.collection('users')
  const collectionSnapShot = await collectionRef.get()
  const usersArray = collectionSnapShot.docs.map(doc => doc.data())

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

// this is code for adding collections to firebase
export const addCollectionAndDocuments = async (collectionKey, collectionArray) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  collectionArray.forEach(collection => {
    const newDocRef = collectionRef.doc();
    console.log({ newDocRef })
    batch.set(newDocRef, collection);
  })

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collectionsArray) => {
  const transformedCollections = collectionsArray.docs.map(doc => {
    const { title, items } = doc.data()
    console.log(title)  
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  console.log(transformedCollections)

  return transformedCollections.reduce((accumulator,currentObj) => {
    accumulator[currentObj.title.toLowerCase()] = currentObj
    return accumulator
  },{})
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;