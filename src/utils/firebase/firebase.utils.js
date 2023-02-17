import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup, 
    signInWithRedirect,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZLZmophDVlwws23zJ4fUKzbOoFzjKR6o",
    authDomain: "dan-crwn-clothing-db-1a3f7.firebaseapp.com",
    projectId: "dan-crwn-clothing-db-1a3f7",
    storageBucket: "dan-crwn-clothing-db-1a3f7.appspot.com",
    messagingSenderId: "908433794350",
    appId: "1:908433794350:web:7688b19002a58cc202c6bf"
}

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot); 
    console.log(userSnapshot.exists());
    
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userDocRef
}