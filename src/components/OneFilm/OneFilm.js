import React, {useEffect, useState} from 'react'

import axios from 'axios'

function OneFilm() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [film, setFilm] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:5000/film/6442593f5017e25652563ae4')
        .then((response)=>{
            setLoading(false);
            setError('')
            setFilm(response.data)
        })
        .catch((error)=>{
            setLoading(false)
            setError(error)
            setFilm()
        });
    })


  return (
    <div>
       <h1>
        {loading ? 'Loading...' : film.titre}
        </h1>
        <br/>
        {loading ? 'Loading...' : film.genre}
        <br/>
        {loading ? 'Loading...' : film.nb_ventes}
        <br/>
        {loading ? 'Loading...' : film.poster}
    </div>
  )
}

export default OneFilm