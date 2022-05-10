import React, {useState} from 'react';
import {Button, TextField} from '@mui/material'

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        repeatPassword:''
    })
    const [checkPassword, setCheckPassword] = useState(false)

    const onFormChange = (e) => {
        let name = e.target.name, value = e.target.value
        if(name === 'password' || name === 'repeatPassword'){
            setCheckPassword(false)
        }
        setFormData({...formData, [name] : value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(formData.password === formData.repeatPassword){
            
        }else{
            setCheckPassword(true)
        }
    }

    return ( 
    <div>
        <h1>Cork Bored</h1>
        <h3>Register</h3>
        <form className='form' onSubmit={onSubmit}>
            <input name='username' type='text' placeholder='username' value={formData.username} onChange={onFormChange}/>
            <input name='password' type='password' placeholder='password' value={formData.password} onChange={onFormChange}/>
            <input name='repeatPassword' type='password' placeholder='password' value={formData.repeatPassword} onChange={onFormChange}/>
            {checkPassword? <p>Passwords are not equal</p> : null}
            <button>Submit</button>
        </form>
    </div>
    );
}
 
export default RegisterForm;