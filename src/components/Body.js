import React from "react";
import MemoriesList from "./MemoriesList"
import {Outlet} from 'react-router-dom'

function Body ({memories}) {
    
    return (
        <div>
            {/* <MemoriesList memories={memories}/>  */}
            {/* This component help to change content depende of the route #yekes */}
            <Outlet /> 
        </div>
    )
}

export default Body;