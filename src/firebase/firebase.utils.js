import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCMlrw3P3W98wX4qvl617YCNgYGAnItuOo",
    authDomain: "e-commerce-db-14b52.firebaseapp.com",
    projectId: "e-commerce-db-14b52",
    storageBucket: "e-commerce-db-14b52.appspot.com",
    messagingSenderId: "87878567743",
    appId: "1:87878567743:web:213650c3fcc29a4637b58a",
    measurementId: "G-FXM7HNYXTL"
}

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch(error){
            console.log("Error Creating User", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;