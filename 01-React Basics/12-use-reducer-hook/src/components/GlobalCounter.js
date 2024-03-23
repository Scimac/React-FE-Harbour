import React, { useReducer } from 'react'
import ChildALevel1 from './ChildALevel1'
import ParentBLevel1 from './ParentBLevel1'
import ParentCLevel1 from './ParentCLevel1'

const initailState = 0;
const reducer = (state, action) => {
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

export const CounterValue = React.createContext();

const GlobalCounter = () => {
    const [count, dispatch] = useReducer(reducer, initailState);
    return (
        <CounterValue.Provider value={[count, dispatch]}>
            <div className='FlexVBoxClass marginSmallAll borderBox'>
                <strong>usereducer() and useContext() - Global counter sharing.</strong>
                <br />
                <b>count - {count}</b>
                <div className='FlexHBoxClass' >
                    <ChildALevel1 />
                    <ParentBLevel1 />
                    <ParentCLevel1 />
                </div>
            </div>
        </CounterValue.Provider>
    )
}

export default GlobalCounter