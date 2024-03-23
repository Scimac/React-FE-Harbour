import React from 'react'
import { UserData } from '../App'

export const UsersList = () => {

    return (
        <ul>
            <UserData.Consumer>
            {
                (oUserData) => {
                     return oUserData.map((userObj) => {
                        return <li key={userObj.userId} style={{
                            "display": "flex", 
                            "justifyContent": "space-between", 
                            "width": "10rem",
                            "padding": "5px",
                            "borderBottom": "1px solid #e9e9e9"
                        }}>
                            <span>{userObj.userName}</span>
                            <span>{userObj.userRole}</span>
                        </li>
                    })
                }
            }
            </UserData.Consumer>
        </ul>
    )
}
