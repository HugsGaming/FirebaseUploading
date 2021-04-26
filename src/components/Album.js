import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {NewPhoto} from '../components/NewPhoto.js'
import {firebase} from '../services/firebase.js'

const db = firebase.firestore();

export const Album = () => {
    const [images, setImages] =  useState([])

    const match = useRouteMatch("/:album");
    const {album} = match.params;

    useEffect(() => {
        db.collection('catAlbums').doc(album).onSnapshot((doc) => {
            setImages(doc.data().images || []);
        })
    }, [])

    return (
        <>
        <section>
            {
                images.map(image => (
                    <Link to={`/${image.id}`}>
                        <aside key={image.name}>
                        <img src={image.url} alt="kitten"/>
                        </aside>
                    </Link>
                ))
            }
        </section>
        <footer>
            <NewPhoto currentAlbum={album}/>
        </footer>
        </>
    )
}