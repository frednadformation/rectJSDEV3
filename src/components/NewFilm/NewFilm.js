import React, { Component } from 'react'

class NewFilm extends Component {
  render() {
    return (
      <div>

      <form action='http://localhost:5000/submit-film' method='post'>
        <label>
            Titre
        </label>
        <input type='text' name='titre' />
        <label>
            Genre
        </label>
        <input type='text' name='genre' />
        <label>
            Nombre ventes
        </label>
        <input type='number' name='nb_ventes' />
        <label>
            Poster
        </label>
        <input type='text' name='poster' />

        <input type='submit' value='Enregister un nouveau film' />
      </form>
      
      </div>
    )
  }
}

export default NewFilm