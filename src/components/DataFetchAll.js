import React, {useState, useEffect} from 'react'

import axios from 'axios'

function DataFetchAll() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [posts, setPost] = useState({});

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((response) =>{
            setLoading(false);
            setPost(response.data);
            setError('');        
        })
        .catch((error) =>{
            setLoading(false);
            setPost();
            setError(error); 
        })        
    })

  return (
    <React.Fragment>
    {
        loading ? 'Loading...' : posts.map((post, index) =>{
            return (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>userId : {post.userId}</p>
                </div>
            )
        })
    }
    </React.Fragment>
  )
}

export default DataFetchAll