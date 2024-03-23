import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function CounterHooks() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("Rerendering the Functional Component");
        console.log("count updated from class comp");
        document.title = `${count} Clicks from Hooks`
    }, [count]);

    return (
        <div>
            Hooks Implementation
            <br></br>
            <br></br>
            <button onClick={() => setCount(count + 1)}>Clicks for Hooks - {count}</button>
            <br></br>
            <input 
                value={name} 
                type="text" 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Please enter your name here" />
        </div>
    )
}

export default CounterHooks