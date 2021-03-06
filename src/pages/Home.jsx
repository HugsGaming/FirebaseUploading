import React from 'react'
import {Link} from 'react-router-dom'
import {NewAlbumForm} from './NewAlbumForm'

export const Home = ({albums}) => {
    return (
        <>
        <section>
            {
                albums.map(album => (
                    <Link to={`/${album.id}`}>
                        <aside key={album.name}>
                        <img src={album.image} alt="kitten"/>
                        <h3>{album.name}</h3>
                        </aside>
                    </Link>
                ))
            }
        </section>
        <footer>
            <NewAlbumForm/>
        </footer>
        </>
    )
}
