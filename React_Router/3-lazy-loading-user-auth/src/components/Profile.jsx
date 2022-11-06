import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const Profile = () => {
  const userObj = useAuth();
  const navigate = useNavigate();
  
  return (
    <div>Welcome {userObj.userName}
      <button onClick={() => {
        userObj.logout();
        navigate('/', { 'replace': true })
      }}>Log Out</button>
    </div>
  )
}

export default Profile