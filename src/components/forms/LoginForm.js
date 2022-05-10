import { Button, TextField } from '@mui/material';
import React from 'react';

const LoginForm = () => {
    return (   
        <form className='form'>
            <TextField id="outlined-basic" label="Username" variant='filled' />
            <TextField id="outlined-basic" label="Password" variant='filled' />
            <Button variant='contained'>Submit</Button>
        </form>
        );
}
 
export default LoginForm;