import React from "react"; 
import {NavLink} from 'react-router-dom'
import add from '../resources/add.png'
import home from '../resources/home.png'
import user from '../resources/user.png'

function Header () {
    return (
        <div className="nav">
            <h1>Cork-bored</h1>
            <input type='text' placeholder="Search a memory..."/>
            <nav>
                <NavLink to='memories'>
                    <img className="nav-icon" src={home} alt='home icon'/>
                </NavLink>
                <NavLink to='newMemory'>
                    <img className="nav-icon" src={add} alt='add icon'/>
                </NavLink>
                <NavLink to='memories'>
                    <img className="nav-icon" src={user} alt='user icon'/>
                </NavLink>
            </nav>
        </div>
    )
}

export default Header;