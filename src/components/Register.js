import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
//Navigation
import {useNavigate} from 'react-router-dom'

//Redux
import { useDispatch } from 'react-redux'
import {login} from './stores/user';

//Components
import RegisterForm from './forms/RegisterForm';

//fetch
import { post } from './fetch/fetchs'



const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        repeatPassword:''
    })
    const [checkPassword, setCheckPassword] = useState(false)

    //Redux
    const dispatch = useDispatch();

    //Navigation
    const navigate = useNavigate();

    const handleOnChangeForm = (e) => {
        let name = e.target.name, value = e.target.value
        if(name === 'password' || name === 'repeatPassword'){
            setCheckPassword(false)
        }
        setFormData({...formData, [name] : value})
    }
    const handleOnSubmitForm = (e) => {
        e.preventDefault()
        if(formData.password === formData.repeatPassword){

            let user={
                id: uuid(),
                username: formData.username, 
                password:formData.password
            }

            if(post(user)){

                dispatch(login({username: formData.username, password:formData.password}))
                navigate('/memories')

            }else{

                setCheckPassword(true)
                
            }
            
        }else{
            setCheckPassword(true)
        }
    }

    return ( 
    <div className='register-box'>
        <RegisterForm formData={formData} checkPassword={checkPassword} onChangeForm={handleOnChangeForm} onSubmitForm={handleOnSubmitForm}/>
    </div> 
    );
}
 
export default Register;