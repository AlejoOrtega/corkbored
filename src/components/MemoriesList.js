import React from "react"; 
import Memory from "./Memory"; 

function MemoriesList ({memories}) {
    const memoriesToDisplay = memories.map(memory => (<Memory memory={memory} key={memory.id}/>))
    
    return (
        <div>
            {memoriesToDisplay}
        </div>
    )
}

export default MemoriesList;