import React from 'react'
import firebase from 'firebase/app'

const auth = firebase.auth();

export const GoogleSignIn = () => {
    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <button onClick={googleSignIn}>Sign In Google</button>
    )
}

