import React from 'react';

const LoginForm = ({formData, onChangeForm, onSubmitForm}) => {
    const {username, password} = formData
    return (   
        <form className='form' onSubmit={onSubmitForm}>
            <input name='username' type='text' placeholder='username' value={username} onChange={onChangeForm}/>
            <input name='password' type='password' placeholder='password' value={password} onChange={onChangeForm}/>
            <button>Log In</button>
        </form>
        );
}
 
export default LoginForm;