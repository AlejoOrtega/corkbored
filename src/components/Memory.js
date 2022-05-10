import React from "react"; 
import NewCommentsForm from "./NewCommentsForm"

function Memory ({memory, memory: {id, caption, image, audio, userId}}) {

        
    return (
        <div>
            <img src={image} alt={caption}></img>
            <p>{caption}</p>
            <p>associated audio: {audio}</p>
            <NewCommentsForm /> 
        </div>
        
    )
}

export default Memory;