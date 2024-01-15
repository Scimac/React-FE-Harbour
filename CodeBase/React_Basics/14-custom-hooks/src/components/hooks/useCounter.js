import { useState } from 'react'

function useCounter(initialVal = 0, changeVal = 1) {
    const [count, setCount] = useState(initialVal);

    const incrementHandler = () => {
        setCount(prevCount => prevCount + changeVal);
    }

    const decrementHandler = () => {
        setCount(prevCount => prevCount - changeVal);
    }

    const resetHandler = () => {
        setCount(initialVal);
    }

    return [count, incrementHandler, decrementHandler, resetHandler];
}

export default useCounter