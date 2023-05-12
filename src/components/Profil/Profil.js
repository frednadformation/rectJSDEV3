import React, {useEffect, useState } from 'react'

import axios from 'axios'

import { useParams } from 'react-router-dom'

function Profil() {

    const params = useParams()

    console.log(params);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/film/'+params.id)
        .then(response =>{
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError('Something went wrong')
        })
    })

    return (
      <div>
          {loading ? 'Loading' : post.titre}
          {loading ? 'Loading' : post.genre}
          {loading ? 'Loading' : post.nb_ventes}
          {loading ? 'Loading' : post.poster}
          {error ? 'error' : null}
  
      </div>
    )


}

export default Profil