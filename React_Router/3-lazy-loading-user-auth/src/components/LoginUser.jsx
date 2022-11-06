import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const LoginUser = () => {
    const [user, setuser] = useState('');
    const userObj = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || '/'

    return (
        <div>
            Please log In:<br />
            <form onSubmit={(e) => e.preventDefault()}>
                <label> User Name
                    <input placeholder='Please eneter your username'
                        name='userName'
                        value={user}
                        onChange={(oEvent) => setuser(oEvent.currentTarget.value)} />
                </label>
                <button onClick={() => {
                    if (user) {
                        userObj.login(user);
                        navigate(redirectPath, { 'replace': true });
                    }
                }}>Log In</button>
            </form>
        </div>
    )
}

export default LoginUser