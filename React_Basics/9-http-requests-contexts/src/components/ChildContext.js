import React, { Component } from 'react'
import { UserContextConsumer } from './userContext'

class ChildContext extends Component {
  render() {
    return (
        <UserContextConsumer>
            {
                (userObj) => {
                    const user = JSON.parse(userObj);
                    return (
                        <div>
                            THis is where we use - Context name
                            <br />
                            Hi {user.userFullName}, or should I say, {user.userName}?
                        </div>    
                    )
                }
            }
        </UserContextConsumer>
    )
  }
}

export default ChildContext