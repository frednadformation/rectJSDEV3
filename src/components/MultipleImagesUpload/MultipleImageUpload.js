import React, {useState} from 'react'
import axios from 'axios'

function MultipleImageUpload() {
    const [selectedFiles, setSelectedFiles] = useState([])

    const handleFileChange = (event) => {
        console.log(event.target.files);
        setSelectedFiles(Array.from(event.target.files));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(selectedFiles){
            const formData = new FormData();
            selectedFiles.map(file => {
                formData.append('images', file)
            })
            axios.post('http://localhost:5000/multipleImages', formData)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type='file' multiple onChange={handleFileChange} />
        <input type='submit' value="Upload" />
    </form>
  )
}

export default MultipleImageUpload