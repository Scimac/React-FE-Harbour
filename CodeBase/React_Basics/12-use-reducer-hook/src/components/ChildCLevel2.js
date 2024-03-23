import React, { useContext } from 'react';
import { CounterValue } from './GlobalCounter';

const ChildCLevel2 = () => {
  const [countVal, dispatcher] = useContext(CounterValue);

  return (
    <div className='marginSmallAll borderBox'>
      Component C2 - Third Lvl
      <br />
      <b>count - {countVal}</b>
      <div>
        <button onClick={() => dispatcher({ type: 'increment', value: 1 })} >Increment by 1</button>
        <button onClick={() => dispatcher({ type: 'decrement', value: 1 })} >Decrement by 1</button>
        <button onClick={() => dispatcher({ type: 'increment', value: 5 })} >Increment by 5</button>
        <button onClick={() => dispatcher({ type: 'decrement', value: 5 })} >Decrement by 5</button>
        <button onClick={() => dispatcher({ type: 'reset' })} >Reset value</button>
      </div>
    </div>
  )
}

export default ChildCLevel2