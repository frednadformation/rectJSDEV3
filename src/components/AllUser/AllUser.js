import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

function AllUser() {

    const initialState ={
        loading: true,
        error: '',
        users : {}
    }
    const reducer = (state, action ) => {
        switch (action.type) {
            case 'FETCH_SUCCESS': return (
                {
                    loading: false,
                    error: '',
                    users : action.payload
                }
            )
            case 'FETCH_ERROR' : return ({
                loading: false,
                error: 'Something went wrong',
                users: {}
            })
            case 'default' : return state
                

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=> {
        axios.get('http://localhost:5000/')
        .then(response =>{
            dispatch({type:'FETCH_SUCCESS', payload: response.data});
        })
        .catch(error =>{
            dispatch({type:'FETCH_ERROR'})
        })
    })

  return (
    <div>
        {
            state.loading ? 'Loading...' : 
            state.users.data.map((user, index) =>{
                return(
                    <div key={index}>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default AllUser