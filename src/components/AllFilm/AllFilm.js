import React, {useEffect, useReducer} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllFilm() {
    const initialState ={
        loading: true,
        error: '',
        films : {}
    }
    const reducer = (state, action ) => {
        switch (action.type) {
            case 'FETCH_SUCCESS': return (
                {
                    loading: false,
                    error: '',
                    films : action.payload
                }
            )
            case 'FETCH_ERROR' : return ({
                loading: false,
                error: 'Something went wrong',
                films: {}
            })
            case 'default' : return state
                

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    
    useEffect(()=> {
        axios.get('http://localhost:5000/allfilm/')
        .then(response =>{
            console.log(response.data)
            dispatch({type:'FETCH_SUCCESS', payload: response.data});
        })
        .catch(error =>{
            dispatch({type:'FETCH_ERROR'})
        })
    })

  return (
    <div>
        {
            state.loading ? 'Loading...' : state.films.map((film, index) => {
                return(
                    <div key={index}>
                        <h1>le titre du film est :</h1>
                        <h1>{film.titre}</h1>
                        <p>genre :{film.genre}</p>
                        <p>nb ventes : {film.nb_ventes}</p>
                        <p>poster : {film.poster}</p>
                        <Link to={`/updatefilm/${film._id}`}>Update Film</Link>
                    </div>

                )
            })
        }

    </div>
  )
}

export default AllFilm