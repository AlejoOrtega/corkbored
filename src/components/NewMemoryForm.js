import React, {useState} from "react"; 

// fetch 
import {post} from "./fetch/fetchs"; 

//navigation
import { useNavigate } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { triggerUpdate } from "./stores/update"
 
const NewMemoryForm = () => {
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        memoryCaption : '',
        memoryImage : '',
        memoryAudio : '',
    })

    const handleFormData = (e) => {
        let name = e.target.name, value = e.target.value;
        setFormData({...formData, [name]:value})
    }

    const handleNewMemoryFormSubmit = (e)  => {
        e.preventDefault(); 
        const newMemory = {
            caption: formData.memoryCaption, 
            image: formData.memoryImage, 
            audio: formData.memoryAudio,
            userId: user.id,
            notes: []
        }
        
        if(post('memories', newMemory)){
            dispatch(triggerUpdate())
            navigate('/home/memories')
        }else{

        }
        
    }
    
    return (
         <div className="new-form-content">
             <h3>Post New Memory</h3>
             <div className="form-adjustment">
                 <form onSubmit={handleNewMemoryFormSubmit} className="form"> 
                    <label>Caption: 
                        <input name="memoryCaption" type="text" onChange={handleFormData} value={formData.memoryCaption}></input>
                    </label>
                    <label>Image: 
                        <input name="memoryImage" type="text" onChange={handleFormData} value={formData.memoryImage}></input>
                    </label>
                    <label>Audio: 
                        <input name="memoryAudio" type="text" onChange={handleFormData} value={formData.memoryAudio}></input>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
         </div>
     )
 }

 export default NewMemoryForm;