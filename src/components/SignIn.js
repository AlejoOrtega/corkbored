import React from 'react';
import LoginForm from './LoginForm';
import {Link} from 'react-router-dom'

const Signin = () => {
    return ( 
    <div className='signin'>
        <h1>Cork Bored</h1>
        <h3>Log In</h3>
        <LoginForm/>
        <p>Don't have an account? <Link to="register">Register</Link></p>
    </div>
    );
}
 
export default Signin;