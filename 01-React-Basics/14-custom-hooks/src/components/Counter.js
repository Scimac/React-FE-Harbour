import React from 'react'
import useCounter from './hooks/useCounter'

const Counter = () => {
    const [count, incrementHandler, decrementHandler, resetHandler] = useCounter(5,3);   

    return (
        <div>
            <h3>Count - {count}</h3>
            <button onClick={incrementHandler}>Increase</button>
            <button onClick={decrementHandler}>Decrease</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    )
}

export default Counter