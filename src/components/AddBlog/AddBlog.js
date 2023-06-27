import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Form } from 'semantic-ui-react'


function AddBlog() {
    const [file, setFile] = useState(null)
    const [titre, setTitre] = useState("")
    const [username, setUsername] = useState("")
    const [imageName, setImageName] = useState("")

    const navigate = useNavigate()

    const handleFileChange = (event) =>{
        console.log(event.target.files[0].name);

        setImageName(event.target.files[0].name)
        setFile(event.target.files[0])
    }

    const handleTitreChange = (event) =>{
        setTitre(event.target.value)
    }
    const handleUsernameChange = (event) =>{ 
        setUsername(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(file){
            const formData = new FormData();
            formData.append('image', file)
            formData.append('username', username);
            formData.append('titre', titre)
            formData.append('imageName', imageName)
            
            axios.post('http://localhost:5000/submit-blog', formData)
            .then((response) =>{
                console.log(response.data);
                return navigate('/myblog')
            })
            .catch((error) => console.log(error))
        }
    }
    
  return (
    
    <Form onSubmit={handleSubmit}>
        <label>File :</label>
        <input type='file' onChange={handleFileChange} />
 
        <Form.Group>
          <Form.Input
            placeholder='Titre'
            onChange={handleTitreChange}
          />
          <Form.Input
            placeholder='Username'
            onChange={handleUsernameChange}    
          />
          <Form.Button content='Enregistrer le blog' />
        </Form.Group>
      </Form>
    
  )
}

export default AddBlog