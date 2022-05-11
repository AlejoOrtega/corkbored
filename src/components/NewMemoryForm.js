import React, {useState} from "react"; 
 
function NewMemoryForm ({}) {
     const [memoryCaption, setMemoryCaption] = useState("")
     const [memoryImage, setMemoryImage] = useState("")
     const [memoryAudio, setMemoryAudio] = useState("")
    const handleNewMemoryFormSubmit = (e)  => {
        e.preventDefault(); 
        const newItem = {
            caption: memoryCaption, 
            image: memoryImage, 
            audio: memoryAudio,
        }
        fetch("http://localhost:3000/memories", {
        })
            .then(r => r.json())
            .then(newItem => newItem())
    }
    return (
         <div>
            <form onSubmit={e=> handleNewMemoryFormSubmit(e)}>Post New Memory: 
                <label>Caption
                    <input type="text" onChange={e => setMemoryCaption(e.target.value)} value={memoryCaption}></input>
                </label>
                <label>Image
                    <input type="text" onChange={e => setMemoryImage(e.target.value)} value={memoryImage}></input>
                </label>
                <label>Audio
                    <input type="text" onChange={e => setMemoryAudio(e.target.value)} value={memoryAudio}></input>
                </label>
            </form>
         </div>
     )
 }

 export default NewMemoryForm;