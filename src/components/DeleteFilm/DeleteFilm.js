import React from 'react'

import { useParams } from 'react-router-dom'
import { SubmitButton } from '../Button.style'

function DeleteFilm() {
    const params = useParams()

  return (
    <div>    
        <form action={`http://localhost:5000/film/delete/${params.id}?_method=DELETE`} method='post'>
        <input type="hidden" name="_method" value="delete" />

        {/* <input type='submit' value='delete film' /> */}

        <SubmitButton value="delete film" />
        </form>
    </div>
  )
}

export default DeleteFilm