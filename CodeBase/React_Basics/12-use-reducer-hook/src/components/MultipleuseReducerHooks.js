import React, { useReducer } from 'react'

const initailState = 0;
const reduceer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + action.value;
        case 'decrement':
            return state - action.value;
        case 'reset':
            return initailState;
        default:
            return state;
    }
}

const MultipleUseReducerHooksCounter = () => {
    const [count1, dispatchC1] = useReducer(reduceer, initailState);
    const [count2, dispatchC2] = useReducer(reduceer, initailState);
    const [count3, dispatchC3] = useReducer(reduceer, initailState);

    const counter = ([count, dispatcher]) => {
        return <div className='FlexVBoxClass'>
            <b>count - {count}</b>
            <div className='FlexHBoxClass'>
                <button onClick={() => dispatcher({ type: 'increment', value: 1 })} >Increment by 1</button>
                <button className='marginTinyLeft' onClick={() => dispatcher({ type: 'decrement', value: 1 })} >Decrement by 1</button>
            </div>
            <div className='marginTinyTop FlexHBoxClass'>
                <button onClick={() => dispatcher({ type: 'increment', value: 5 })} >Increment by 5</button>
                <button className='marginTinyLeft' onClick={() => dispatcher({ type: 'decrement', value: 5 })} >Decrement by 5</button>
            </div>
            <button className='marginTinyTop' onClick={() => dispatcher({ type: 'reset' })} >Reset value</button>
        </div>
    }

    return (
        <div className='FlexVBoxClass marginSmallAll'>
            <strong>usereducer() - Multiple counter sharing same hook, less code.. NEAT!!</strong>
            <br />
            <div className='FlexHBoxClass'>
                {counter([count1, dispatchC1])}
                {counter([count2, dispatchC2])}
                {counter([count3, dispatchC3])}
            </div>
        </div>
    )
}

export default MultipleUseReducerHooksCounter;