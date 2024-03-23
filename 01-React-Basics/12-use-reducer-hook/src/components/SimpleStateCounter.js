import React, { useReducer } from 'react'

const initailState = 0;
const reduceer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initailState
        default:
            return state
    }
}

const SimpleStateCounter = () => {
    const [count, dispatch] = useReducer(reduceer, initailState);
    return (
        <div className='marginSmallAll FlexVBoxClass'>
            <strong>usereducer() - Simple state and action based counter</strong>
            <br /> 
            count - {count}
            <div className='marginSmallTop' style={{display: 'flex', flexDirection : 'row', justifyContent : 'center'}}>
                <button onClick={() => dispatch('increment')} >Increment by 1</button>
                <button className='marginSmallLeft' onClick={() => dispatch('decrement')} >Decrement by 1</button>
                <button className='marginSmallLeft' onClick={() => dispatch('reset')} >Reset value</button>
            </div>
        </div>
    )
}

export default SimpleStateCounter;