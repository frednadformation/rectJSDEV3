import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Updatetest() {

    const [updatedAt, setUpdatedAt] = useState(null);

    useEffect(() => {
        // PUT request using axios inside useEffect React hook
        const article = { title: 'React Hooks PUT Request Example', soustitre: 'React Hooks PUT Response', para: 'Lorem ipsum dolor sit amet, consectetur'};
        axios.put('http://localhost:5000/edit/6450ebc33d0dfd22dc9bc4d7', article)
            .then(response => setUpdatedAt(response.data.updatedAt));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

  return (
    <div>


<form action='http://localhost:5000/post/edit/645ca0d3c3c00d479d94bb13?_method=PUT' method='post'>
        <input type="hidden" name="_method" value="PUT" />
        <label>
            Titre
        </label>
        <input type='text' name='titre' />
        <label>
            Genre
        </label>
        <input type='text' name='soustitre' />
        <label>
            Poster
        </label>
        <input type='text' name='para' />

        <input type='submit' value='Enregister un nouveau film' />
      </form>
      
    </div>
  )
}

export default Updatetest