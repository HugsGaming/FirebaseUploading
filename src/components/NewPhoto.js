import React from 'react'
import {useState} from 'react'
import fb from 'firebase'
import {firebase} from '../services/firebase'

const db = firebase.firestore();
const storage = firebase.storage();

export const NewPhoto = ({currentAlbum}) => {
    const [file, setFile] = useState(null);
    
    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const onUpload = async () => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        db.collection("catAlbums").doc(currentAlbum).update({
            images: fb.firestore.FieldValue.arrayUnion({
                name: file.name,
                url: await fileRef.getDownloadURL()    
            })
        })
    }

    return (
    <>
        <input type="file" onChange={onFileChange}/>
        <button onClick={onUpload}>Upload Image</button>
    </>
    )
}