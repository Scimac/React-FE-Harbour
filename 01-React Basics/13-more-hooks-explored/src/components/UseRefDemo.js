import React, { useRef, useEffect, useState } from 'react'

const UseRefDemo = () => {
    const inputRef = useRef(null);
    const [timer, setTimer] = useState(0);
    const timerReference = useRef();

    useEffect(() => {
        inputRef.current.focus();

        timerReference.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);

        return () => clearInterval(timerReference.current);

    }, []);

    return (
        <div>
            <input ref={inputRef} placeholder='focusing here direclty' />
            <br />
            But that's not the only thing <b>useRef()</b> can do, it can store references to --- in it's current property
            <br />
            Timer - {timer}
            <button onClick={() => clearInterval(timerReference.current)} >Clear Interval Timer</button>
        </div>
    )
}

export default UseRefDemo