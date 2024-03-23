import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    const fnNavStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bolder' : 'normal',
        }
    }

    return (
        <>
            <nav>
                <NavLink style={fnNavStyles} to='/'>Home</NavLink>
                <NavLink style={fnNavStyles} to='/about'>About</NavLink>
            </nav>
        </>
    )
}
