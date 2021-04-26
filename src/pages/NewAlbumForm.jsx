import React, { useState } from 'react'
import {firebase} from '../services/firebase'

const db = firebase.firestore();

export const NewAlbumForm = () => {
    const [albumName, setAlbumName] = useState("");

    const onAlbumNameChange = (e) =>{
        setAlbumName(e.target.value);
    }

    const onAlbumCreate = () => {
        if(!albumName){
            return;
        }
        db.collection("catAlbums").doc(albumName).set({
            name: albumName
        });
        setAlbumName("")
    }

    return(
        <>
        <input value={albumName} onChange={onAlbumNameChange} type="text"/>
        <button onClick={onAlbumCreate}>Create Album</button>
        </>
    )

}
