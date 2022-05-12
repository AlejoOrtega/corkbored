import React from "react"; 
import NewCommentsForm from "./NewCommentsForm"
import {v4 as uuid} from 'uuid'
import {onDelete} from './fetch/fetchs'
import { useDispatch } from "react-redux";
import { triggerUpdate } from "./stores/update"

function Memory ({memory: {id, caption, image, audio, userId, notes}}) {
    const dispatch = useDispatch();
    const handleOnDelete = () => {
        if(onDelete(id)){
            dispatch(triggerUpdate())
        }
    }
    return (
        <div className='memory-content'>
            <div className="memory-image-container">
                <img className='memory-image' src={image} alt={caption}/>
                <button className='memory-delete-button' onClick={handleOnDelete}>Delete</button>
            </div>
            
            <p>{caption}</p>
            <p>associated audio: {audio}</p>
            <NewCommentsForm key={uuid()} memoryId={id} notesList={notes}/>
            
            
        </div>
        
    )
}

export default Memory;