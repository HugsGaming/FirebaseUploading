import React from 'react'
import firebase from 'firebase/app'

const auth = firebase.auth();

export const FacebookSignIn = () => {
    const facebookSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider);
    }
    return(
        <button onClick={facebookSignIn}>Sign In With Facebook</button>
    )
}
