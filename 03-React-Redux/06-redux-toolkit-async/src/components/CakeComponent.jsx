import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { ordered, restocked } from '../features/cake/cakeSlice';

const CakeComponent = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();  
    const [restockCount, setRestockCount] = useState(0);
  return (
    <div>
        <h2>No of Cakes - {numOfCakes} </h2>
        <button onClick={() => dispatch(ordered())}>Buy Cake</button>      
        <input type='number' placeholder='input restock value' value={restockCount} onChange={(e) => setRestockCount(parseInt(e.currentTarget.value))} />
        <button onClick={() => dispatch(restocked(restockCount))}>Restock Cake</button>
    </div>
  )
}

export default CakeComponent