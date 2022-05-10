import React, {useState, useEffect} from 'react';
//Navigation
import {useNavigate} from 'react-router-dom'
//fetch
import {get} from './fetch/fetchs'

//components
import LoginForm from './forms/LoginForm';
import {Link} from 'react-router-dom'

const Signin = () => {
    const [existingUsers, setUsers] = useState([])
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const navigate = useNavigate()

    const handleOnChangeForm = (e) => {
        let name = e.target.name, value= e.target.value
        setFormData({...formData, [name]:value})
    }

    const handleOnSubmitForm = (e) => {
        e.preventDefault()
        for (const user of existingUsers) {
            if(formData.username === user.username && formData.password === user.password){
                navigate('/memories')
                break;
            }
        }
    }




    useEffect(()=>{
        const fetchData = async () => {
            setUsers( await get('users'))
        }
        fetchData()
    }, [])

    return ( 
    <div className='signin'>
        <h1>Cork Bored</h1>
        <h3>Log In</h3>
        <LoginForm formData = {formData} onChangeForm = {handleOnChangeForm} onSubmitForm={handleOnSubmitForm}/>
        <p>Don't have an account? <Link to="register">Register</Link></p>
    </div>
    );
}
 
export default Signin;