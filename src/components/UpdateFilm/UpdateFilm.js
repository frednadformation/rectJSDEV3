import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

import DeleteFilm from '../DeleteFilm/DeleteFilm';



function UpdateFilm(){
    const params = useParams()

    

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [film, setFilm] = useState({});
    const [title, setTitle] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:5000/film/'+ params.id)
        .then((response)=>{
            setLoading(false);
            setError('')
            setFilm(response.data)
            setTitle(response.data.titre)
        })
        .catch((error)=>{
            setLoading(false)
            setError(error)
            setFilm()
        });
    })

    const handleTitreChange = event =>{
    console.log(event.target.value)
        setTitle(event.target.value)
    }
    const handleGenreChange = event =>{
        // console.log(event.target.value)
        setFilm(event.target.value)
    }
    const handleNbVentesChange = event =>{
        // console.log(event.target.value)
        setFilm(event.target.value)
    }
    const handlePosterChange = event =>{
        // console.log(event.target.value)
        setFilm(event.target.value)
    }

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


      <form action={`http://localhost:5000/film/edit/${params.id}?_method=PUT`} method='post'>
      <input type="hidden" name="_method" value="put" />
      <label>
          Titre
      </label>
      <input type='text' name='titre' value={title} onChange={handleTitreChange} />
      <label>
          Genre
      </label>
      <input type='text' name='genre' value={film.genre} onChange={handleGenreChange} />
      <label>
          Nombre ventes
      </label>
      <input type='number' name='nb_ventes' value={film.nb_ventes} onChange={handleNbVentesChange} />
      <label>
          Poster
      </label>
      <input type='text' name='poster' value={film.poster} onChange={handlePosterChange} />

      <input type='submit' value='update film' />
    </form>
    
    <DeleteFilm />

    </div>
    )
 
}

export default UpdateFilm