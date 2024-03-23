import React from 'react'
import { useNavigate, Link, Outlet, useParams } from 'react-router-dom'

export const UserInfo = () => {
    const navigate = useNavigate();
    const { userId, isAdmin } = useParams();

    return (
        <>
        <div>UserInfo : {userId}</div>
        <button style={{marginBottom : "1rem"}} onClick={() => navigate(-1)}>Go Back</button>
        <div>
            <Link to="personalInfo" > Personal Info </Link>
            <Link to="employeeInfo" style={{marginLeft : "1rem", marginBottom : "1rem"}} > Employment Info </Link>
            { isAdmin === 'Admin' ? <Link to="admintasks" style={{marginLeft : "1rem", marginBottom : "1rem"}} > Admin Tasks </Link> : null}
        </div>
        <br/>
        <Outlet />
        </>
  )
}
