import React, { useReducer } from 'react'

const initailState = {
    firstCounter: 0,
    secondCounter: 0
};
const reduceer = (state, action) => {
    switch (action.type) {
        case 'incrementC1':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrementC1':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'resetC1':
            return { ...state, firstCounter: initailState.firstCounter };
        case 'incrementC2':
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrementC2':
            return { ...state, secondCounter: state.secondCounter - action.value };
        case 'resetC2':
            return { ...state, secondCounter: initailState.secondCounter };
        default:
            return state;
    }
}

const ComplexStateCounter = () => {
    const [count, dispatch] = useReducer(reduceer, initailState);
    return (
        <div className='marginSmallAll FlexVBoxClass'>
            <strong>usereducer() - Complex state obj and action obj based counter</strong>
            <br />
            <div className='FlexHBoxClass'>
                <div className='FlexVBoxClass'>
                    <b>count - {count.firstCounter}</b>
                    <div className='FlexHBoxClass'>
                        <button onClick={() => dispatch({ type: 'incrementC1', value: 1 })} >Increment by 1</button>
                        <button className='marginTinyLeft' onClick={() => dispatch({ type: 'decrementC1', value: 1 })} >Decrement by 1</button>
                        <button className='marginTinyLeft' onClick={() => dispatch({ type: 'incrementC1', value: 5 })} >Increment by 5</button>
                        <button className='marginTinyLeft' onClick={() => dispatch({ type: 'decrementC1', value: 5 })} >Decrement by 5</button>
                        <button className='marginTinyLeft' onClick={() => dispatch({ type: 'resetC1' })} >Reset value</button>
                    </div>
                </div>
                <div className='FlexVBoxClass'>
                    <b>count - {count.secondCounter}</b>
                    <div className='FlexHBoxClass'>
                        <button onClick={() => dispatch({ type: 'incrementC2', value: 1 })} >Increment by 1</button>
                        <button className='marginTinyLeft' onClick={() => dispatch({ type: 'decrementC2', value: 1 })} >Decrement by 1</button>
                        <button className='marginTinyLeft' onClick={() => dispatch({ type: 'incrementC2', value: 5 })} >Increment by 5</button>
                        <button className='marginTinyLeft' onClick={() => dispatch({ type: 'decrementC2', value: 5 })} >Decrement by 5</button>
                        <button className='marginTinyLeft' onClick={() => dispatch({ type: 'resetC2' })} >Reset value</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComplexStateCounter