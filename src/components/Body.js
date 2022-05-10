import React from "react";
import MemoriesList from "./MemoriesList"
import NewMemoryForm from "./NewMemoryForm"; 

function Body ({memories}) {
   
    
   
    return (
        <div>
            <NewMemoryForm />
            <MemoriesList memories={memories}/> 
        </div>
    )
}

export default Body;