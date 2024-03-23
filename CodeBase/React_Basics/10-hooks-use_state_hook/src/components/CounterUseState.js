import React, { useState } from 'react'

function CounterUseState() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count+1)}>Clicks - {count}</button>
        </div>
    )
}

export default CounterUseState