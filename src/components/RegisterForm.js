import React from 'react';
import {Button, TextField} from '@mui/material'

const RegisterForm = () => {
    return ( 
    <div>
        <h1>Cork Bored</h1>
        <h3>Register</h3>
        <form className='form'>
            <TextField id="outlined-basic" label="Username" variant='filled' />
            <TextField id="outlined-basic" label="Password" variant='filled' />
            <TextField id="outlined-basic" label="Repeat Password" variant='filled' />
            <Button variant='contained'>Submit</Button>
        </form>
    </div>
    );
}
 
export default RegisterForm;