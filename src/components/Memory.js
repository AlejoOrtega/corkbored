import React from "react"; 
import NewCommentsForm from "./NewCommentsForm"

function Memory ({memory, memory: {id, caption, image, audio, userId}}) {

        
    return (
        <div className='memory-content'>
            <div className="memory-image-container">
                <img className='memory-image' src={image} alt={caption}/>
            </div>
            
            <p>{caption}</p>
            <p>associated audio: {audio}</p>
            <NewCommentsForm /> 
        </div>
        
    )
}

export default Memory;