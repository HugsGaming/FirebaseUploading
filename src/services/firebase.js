import fb from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBtX8p4NR3AvDLn1qxrEZ9c7P6yhccSxXQ",
    authDomain: "wearforward-website-b3cc6.firebaseapp.com",
    projectId: "wearforward-website-b3cc6",
    storageBucket: "wearforward-website-b3cc6.appspot.com",
    messagingSenderId: "555769743731",
    appId: "1:555769743731:web:065e82c64f3e47ac401d06",
    measurementId: "G-HYZ2R0SX16"
}

export const firebase = !fb.apps.length ? fb.initializeApp(config) : fb.app();
