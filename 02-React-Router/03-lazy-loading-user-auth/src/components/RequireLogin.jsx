import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/Auth'

const RequireLogin = ({children}) => {
    const auth = useAuth();

    //This is used to redirect the user to the page from where we are redirecting to the login page...
    // Setting the previous path in state object for useNavigate to use later
    const location = useLocation();

    if (!auth.userName) {
        return <Navigate to='/login' state={{'path' : location.pathname}} />
    }

  return children;
}

export default RequireLogin