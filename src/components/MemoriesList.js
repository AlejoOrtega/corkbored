import React from "react"; 

// fetch
import {post} from "./fetch/fetchs"

// components
import Memory from "./Memory"; 

function MemoriesList ({memories}) {
    const memoriesToDisplay = memories.map(memory => (<Memory memory={memory} key={memory.id}/>))
    
    return (
        <div>
            <h1>test</h1>
            {memoriesToDisplay}
        </div>
    )
}

export default MemoriesList;