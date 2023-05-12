import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './css/DataFetchTodos.css'

function DataFetchTodos() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [todos, setTodos] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(response =>{
            setLoading(false)
            setError('')
            setTodos(response.data)
        })
        .catch(error =>{
            setLoading(false)
            setError('Error')
            setTodos('')
        })
    })

  return (
    <div>
        {
            loading ? 'Loading...' : todos.map((todo, index) =>{
                return (
                    
                    <div className={todo.completed ? 'vert' : "rouge"} key={index}>
                    
                    <h2>{todo.title}</h2>
                    <p>{todo.userId}</p>
                    <p>Completé : {todo.completed ? 'La tâche est completé' : "La tâche n'est pas completé"}</p>
                    <hr/>
                </div>)
            })
        }

        {
            error ? 'Error' : null
        }
    </div>
  )
}

export default DataFetchTodos   