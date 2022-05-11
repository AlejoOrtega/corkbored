import React from "react"; 

// fetch
import {post} from "./fetch/fetchs"

// components
import Memory from "./Memory"; 

function MemoriesList ({memories}) {
    const memoriesToDisplay = memories.map(memory => (<Memory memory={memory} key={memory.id}/>))
    
    return (
        <div className="memory-list-content">
            {memoriesToDisplay}
        </div>
    )
}

export default MemoriesList;