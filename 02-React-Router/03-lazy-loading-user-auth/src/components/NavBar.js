import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const NavBar = () => {
    const authObj = useAuth();
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink style={{ marginLeft: "1rem" }} to='/profile'>Profile</NavLink>
            <NavLink style={{ marginLeft: "1rem", marginRight: "1rem" }} to='/about'>About</NavLink>
            {!authObj.userName && <NavLink to='/login'> Login </NavLink>}
        </nav>
    )
}

export default NavBar