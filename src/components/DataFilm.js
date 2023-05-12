import React, {useState, useEffect} from 'react'

import axios from 'axios'

function DataFilm() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [film, setFilm] = useState({})
    const [nom, setNom] =useState('');

    useEffect(() => {
        // axios.get('http://www.omdbapi.com/?t=titanic&apikey=18aa403a')
        // axios.get('http://www.omdbapi.com/?t='+nom+'&apikey=18aa403a')
        axios.get(`http://www.omdbapi.com/?t=${nom}&apikey=18aa403a`)
        .then((response) => {
            setLoading(false)
            setFilm(response.data)
            setError('')
            
        })
        .catch((error) => {
            setLoading(false)
            setFilm()
            setError(error)
            
        });
    })

    const handleInputChange = event =>{
        // console.log(event.target.value)
        setNom(event.target.value)
    }

  return (
    <div>
    <label>Entrer un film :</label>
    <br/>
    <input type="text" onChange={handleInputChange}/>
    <h1>
        {
            loading ? "Loading" : film.Title
        }
        
    </h1>
        <p>
        {
            loading ? "Loading" : <img src = {film.Poster} />
        }
        
        </p>
        <p>

        {
            loading ? "Loading" : film.Year
        }
        </p>
        <p>
        {
            loading ? "Loading" : film.BoxOffice
        }

        </p>


    </div>
  )
}

export default DataFilm 