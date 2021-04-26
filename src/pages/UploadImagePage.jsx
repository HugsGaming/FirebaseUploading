import React, {useEffect, useState} from 'react'
import {firebase} from '../services/firebase'
import '../css/mvp.css'
import { NewAlbumForm } from './NewAlbumForm';
import { Switch, Route } from 'react-router';
import {Link} from 'react-router-dom'
import {Album} from '../components/Album.js'
import { Home } from './Home';

const db = firebase.firestore();

function UploadImagePage() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        db.collection('catAlbums').onSnapshot((snapshot) => {
            const tempAlbums = [];
            snapshot.forEach(doc => {
                tempAlbums.push({...doc.data(), id: doc.id});
            })
            setAlbums(tempAlbums);
        })
    }, [])

    return (
        <>
        <Switch>
            <Route exact path="/" render={() => <Home albums={albums}/>}/>
            <Route path="/:album" component={Album}/>
        </Switch>
        </>
    )
}

export default UploadImagePage
