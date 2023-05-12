import React from "react";

// function Greet(){
//     return <h1>Hello Fréd !</h1>
// }

// const Greet = (props) =>{
//     console.log(props)
//     return <div>
//             <h1>Hello {props.name} vous avez {props.age}</h1>
//             <p>{props.children}</p>
//         </div> 
// } 
const Greet = (props) =>{
   
    const {name, age, children} = props;

    return <div>
            <h1>Hello {name} vous avez {age}</h1>
            <p>{children}</p>
        </div> 
} 


export default Greet