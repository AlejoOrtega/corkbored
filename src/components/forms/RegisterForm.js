import React from 'react';

const RegisterForm = ({formData, onChangeForm, onSubmitForm, checkPassword}) => {

    const {username, password, repeatPassword} = formData

    return ( 
    <div>
        <h1>Cork Bored</h1>
        <h3>Register</h3>
        <form className='form' onSubmit={onSubmitForm}>
            <input name='username' type='text' placeholder='username' value={username} onChange={onChangeForm}/>
            <input name='password' type='password' placeholder='password' value={password} onChange={onChangeForm}/>
            <input name='repeatPassword' type='password' placeholder='password' value={repeatPassword} onChange={onChangeForm}/>
            {checkPassword? <p>Passwords are not equal</p> : null}
            <button>Submit</button>
        </form>
    </div>
    );
}
 
export default RegisterForm;