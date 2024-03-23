import React, { useContext } from 'react';
import { jobDescContext, humanAiDiffContext } from "../App";
import UserContext from './userContext';

function HooksMultipleContextsConsumer() {

  const humanOrAi = useContext(humanAiDiffContext);
  const user = JSON.parse(useContext(UserContext));
  const jobDesc = useContext(jobDescContext);

  return (
    <div>
        THis is where we use - Context using <b>useContext() Hook</b>. Just check the difference in code!!! Amazing!
        <br />
        <br />
        Hi {user.userFullName}, or should I say, {user.userName}?
        <br></br>
        You are {humanOrAi}.... Well good for you.
        <br></br>
        Hope being a {jobDesc} is suiting you well!!
    </div>    
  )
}

export default HooksMultipleContextsConsumer;