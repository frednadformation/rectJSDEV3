import React, {useEffect, useReducer} from 'react'
import axios from 'axios'


function DataFetchAllReducer() {
    const initialState = {
        loading : true,
        error: '',
        posts: {}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    posts: action.payload,
                    error: ""
            }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    posts: {},
                    error: "Something went wrong"
            }
        default :
            return state
    }
}

    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error =>{
            dispatch({type: 'FETCH_ERROR'})
        })
    })

    
  return (
    <div>
        {
            state.loading ? 'Loading'  : 
            state.posts.map((post, index) => {
                return (
                    <div key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })
        }

    </div>

  )
}

export default DataFetchAllReducer