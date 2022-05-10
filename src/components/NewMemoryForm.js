import React from "react"; 
 
function NewMemoryForm () {
     return (
         <div>
            <form>Post New Memory: 
                <label>Caption
                    <input></input>
                </label>
                <label>Image
                    <input></input>
                </label>
                <label>Audio
                    <input></input>
                </label>
            </form>
         </div>
     )
 }

 export default NewMemoryForm;