import React from 'react'
import './css/person.css';
import User from './User';

function Person({person, couleur}) { 
    // if(person.name == "Diana"){
    //     return (
    //         <div className='bordure diana'> 
    //             <h2>Je suis {person.name}, j'ai {person.age} ans. Je connais {person.skill}</h2>
    //         </div>
    //       )
    //     }
    // else{            
    //     return (
    //         <div className='bordure autre'> 
    //             <h2>Je suis {person.name}, j'ai {person.age} ans. Je connais {person.skill}</h2>
    //         </div>
    //     )
    // }

//     const couleurText = {
//         color : couleur
//     }

//     let retour = person.name == "Diana" ? 
//         <div className='bordure diana'> 
//                  <h2>Je suis {person.name}, j'ai {person.age} ans. Je connais {person.skill}</h2>
//         </div>
//         :
//         <div style={couleurText} className='bordure'> 
//             <h2>Je suis {person.name}, j'ai {person.age} ans. Je connais {person.skill}</h2>
//         </div>

    
// return (retour);

<User />
}

export default Person