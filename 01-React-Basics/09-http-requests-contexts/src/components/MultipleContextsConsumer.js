import React from 'react';
import {jobDescContext, humanAiDiffContext} from "../App"
import UserContext from './userContext';

function MultipleContextsConsumer() {
  return (
    <div>
        <humanAiDiffContext.Consumer>
            {(humanOrAi) => {
                return <UserContext.Consumer>
                    {(userObj) => {
                        const user = JSON.parse(userObj);
                        return <jobDescContext.Consumer>
                            {(jobDesc) => {
                                return (
                                    <div>
                                        THis is where we use - Context using Multiple Context Comsumption methodology
                                        <br />
                                        <br />
                                        Hi {user.userFullName}, or should I say, {user.userName}?
                                        <br></br>
                                        You are {humanOrAi}.... Well good for you.
                                        <br></br>
                                        Hope being a {jobDesc} is suiting you well!!
                                    </div>    
                                )
                            }}
                        </jobDescContext.Consumer>
                    }}
                </UserContext.Consumer>
            }}
        </humanAiDiffContext.Consumer>
    </div>
  )
}

export default MultipleContextsConsumer