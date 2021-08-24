import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCHiWf1RBSrzKO6-cvS60S04mqixJ2mcmI",
    authDomain: "crwn-db-clothing-656e7.firebaseapp.com",
    projectId: "crwn-db-clothing-656e7",
    storageBucket: "crwn-db-clothing-656e7.appspot.com",
    messagingSenderId: "221637207601",
    appId: "1:221637207601:web:d3d8f3f116bca77acd1710",
    measurementId: "G-XPH0TCCHGL"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;