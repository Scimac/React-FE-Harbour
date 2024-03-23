import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { ordered, restocked } from '../features/icecream/iceCreamSlice';

const IceCreamComponent = () => {
  const numOfIceCream = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  const [restockCount, setRestockCount] = useState(0);
  return (
    <div>
      <h2>No of IceCream - {numOfIceCream} </h2>
      <button onClick={() => dispatch(ordered())}>Buy IceCream</button>
      <input type='number' placeholder='input restock value' value={restockCount} onChange={(e) => setRestockCount(parseInt(e.currentTarget.value))} />
      <button onClick={() => dispatch(restocked(restockCount))}>Restock IceCream</button>
    </div>
  )
}

export default IceCreamComponent