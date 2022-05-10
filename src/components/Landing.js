import React from 'react';
import SignIn from './SignIn';
import memory from '../resources/memories.jpeg'
import Home from "./Home"


const Landing = () => {
    return ( 
        <div className='box center'>
            <img src= {memory} alt='Landing memory'/>
            <SignIn /> 
            <Home />
        </div>
    );
}
 
export default Landing;