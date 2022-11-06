import React, { useState } from 'react'
import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { UserData } from '../App';
import { UsersList } from './UsersList'

export const Home = () => {
  const [sUserId, setUserId] = useState('');
  const navigate = useNavigate();
  const sUsersObj = useContext(UserData);

  const [oSearchParams, setSearchParams] = useSearchParams();
  const oGetSearchParams = oSearchParams.get("isParamActive");

  return (
    <>
    <UsersList />
    <br/>
    Input user ID for more info:
    <br/>
    <br />
    User ID:
    <br />
    <input value={sUserId}
      type="number"
      min='1'
      max={sUsersObj.length}
      placeholder="Please input the user ID"
      onChange={(e) => setUserId(Number(e.currentTarget.value))} />

    <button style={{marginLeft : "1rem"}} onClick={() => navigate(`/userInfo/${sUsersObj[sUserId-1].userId}/${sUsersObj[sUserId-1].userRole}`)}>Go to User</button>
    <br/>
    <br />
    Exercise for search Params:
    <br />
    <button style={{marginBottom : "1rem"}} onClick={() => setSearchParams({isParamActive : true})} > Set Search Params </button>
    <button style={{marginLeft : "1rem", marginBottom : "1rem"}} onClick={() => setSearchParams({})} > Reset Search Params </button>
    <div>
      {
        oGetSearchParams === 'true' ? "Search Params are set" : "Search Params are reset" 
      }
      </div>
    </>
  )
}