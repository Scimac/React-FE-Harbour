import React, { useState } from 'react'

function SpreadOperator() {
    const [nameObj, setName] = useState({
        firstName: '',
        lastName: ''
    });

    return (
        <div>
            <input placeholder='Enter First Name' value={nameObj.firstName} 
                onChange={(e) => setName({ ...nameObj, "firstName": e.target.value })} ></input>
            <br></br>
            <input placeholder='Enter Last Name' value={nameObj.lastName} 
                onChange={(e) => setName({ ...nameObj, "lastName": e.target.value })} ></input>
            <br></br>
            <p>First Name - {nameObj.firstName}</p>
            <p>Last Name - {nameObj.lastName}</p>
        </div>
    )
}

export default SpreadOperator