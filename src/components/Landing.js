import React from 'react';

import SignIn from './SignIn';

import memory from '../resources/memories.jpeg'

const Landing = () => {
    return ( 
        <div className='box center'>
            <img src= {memory} alt='Landing memory'/>
            <SignIn /> 
        </div>
    );
}
 
export default Landing;