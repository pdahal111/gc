import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"; // this is to set up signin by google pop up
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; // this is to setup the firestore database

const firebaseConfig = {
  apiKey: "AIzaSyD6EEiorVNlvB9olScWwmyMaGhN9ixekLs",
  authDomain: "gurkha-clothing-db.firebaseapp.com",
  projectId: "gurkha-clothing-db",
  storageBucket: "gurkha-clothing-db.appspot.com",
  messagingSenderId: "179285719991",
  appId: "1:179285719991:web:a3d618f0aff01193ac4632",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// below is for the database
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot); 
  console.log(userDocRef); 

  if (!userSnapshot.exists()) {
    const {  displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
         displayName,
        email,
                createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
