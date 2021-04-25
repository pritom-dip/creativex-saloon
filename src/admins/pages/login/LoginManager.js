import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const firabaseInitialization = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleSignUpWithEmailAndPassword = (userData) => {
    return firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
        .then((userCredential) => {
            // Signed in 
            const getUserData = firebase.auth().currentUser;
            updateProfile(getUserData, userData);

            const createdUser = {
                name: userData.username,
                email: userData.email,
                isSignedIn: true
            };
            return createdUser;

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('er', error)
            return 'error';
        });
}

const updateProfile = (user, data) => {

    user.updateProfile({
        displayName: data.username,
    }).then(res => {
        return true;
    }).catch(function (error) {
        return false;
    });
}

export const handleSigninWithEmailAndPassword = (user) => {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
            const loggedInUser = userCredential.user;
            const currentUser = {
                name: loggedInUser.displayName,
                email: user.email,
                isSignedIn: true
            }
            getTokenOfSignedInUser();
            return currentUser;
        })
        .catch((error) => {
            return 'error';
        });
}

const getUserData = () => {
    return firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}

const getTokenOfSignedInUser = () => {
    return firebase.auth().currentUser.getIdToken().then(function (idToken) {
        sessionStorage.setItem('token', idToken);
    }).catch(function (error) {
        console.log(error);
    });
}

export const googleSignUp = () => {
    return firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user;
            const newUser = {
                name: user.displayName,
                email: user.email,
                isLoggedIn: true,
                photo: user.photoURL
            }
            getTokenOfSignedInUser();
            return newUser;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log('error', error);
            return false;
        });
}

export const logoutUser = () => {
    return firebase.auth().signOut().then(() => {
        sessionStorage.removeItem('token');
        return true;
    }).catch((error) => {
        console.log(error);
    });
}