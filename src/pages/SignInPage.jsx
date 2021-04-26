import React from 'react'
import { FacebookSignIn } from "../components/FacebookSignIn.js";
import { GoogleSignIn } from "../components/GoogleSignIn.js";



export const SignInPage = () => {
    return (
        <div>
                <FacebookSignIn/>
                <GoogleSignIn/>
        </div>
    )
}


