import React from "react"; 


//navigation
import {NavLink, useNavigate} from 'react-router-dom'

// Redux
import { useDispatch } from "react-redux";
import { logout } from './stores/user'
import { cleanMemories } from "./stores/memories";
//Images
import add from '../resources/add.png'
import home from '../resources/home.png'
import logoutImage from '../resources/logout.png'

function Header () {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogOut = () =>{
        dispatch(logout())
        dispatch(cleanMemories())
        navigate('/')
    }
    return (
        <div className="header">
            <h1>Cork-bored</h1>
            <input className="header-input" type='text' placeholder="Search a memory..."/>
            <nav className="nav-content">
                <NavLink to='memories'>
                    <img className="nav-icon" src={home} alt='home icon'/>
                </NavLink>
                <NavLink to='new'>
                    <img className="nav-icon" src={add} alt='add icon'/>
                </NavLink>
                
                <img onClick={handleLogOut} className="nav-icon" src={logoutImage} alt='user icon'/>
                
            </nav>
        </div>
    )
}

export default Header;