import React, {useState, useEffect} from 'react'

import axios from 'axios';

function DataFetchingOne() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});


    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then( response =>{
                setLoading(false);
                setPost(response.data);
                setError('')
            }
            )
            .catch(error =>{
                setLoading(false);
                setError(error);
                setPost('');
            });
    });
    
  return (
    <React.Fragment>
    <h1>
    
        {
            loading ? 'Loading...' : post.title
        }
    </h1>

    <p>
        {
            loading ? 'Loading...' : post.body
        }

    </p>

        {
            error ? 'Error' : null
        }

    </React.Fragment>
  )
}

export default DataFetchingOne