import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/icecreams/icecreamActions';

const IceCreamCounter = () => {
    const numOfIceCreams = useSelector(state => state.iceCreams.numOfIceCreams);
    const dispatch =  useDispatch();

    return (
        <div>
            <h1>The number of cakes are {numOfIceCreams}</h1>
            <button onClick={dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    )
}

export default IceCreamCounter;