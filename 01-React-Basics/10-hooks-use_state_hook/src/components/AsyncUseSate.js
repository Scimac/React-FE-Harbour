import React, { useState } from 'react'

function AsyncUseSate() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const [countCorrect, setCountCorrect] = useState(initialCount);

    // Weird way of incrementing values, but helps in proving a point!!
    const incrementCounter = () => {
        for(let i=0; i<=6; i++) {
            setCount(count+1)
        }
    }

    const incrementCounterCorrect = () => {
        for(let i=0; i<6; i++) {
            setCountCorrect((prevState) => prevState+1)
        }
    }

    return (
        <div>
            Using Previous States to set new states using useState()
            <br></br>
            <br></br>
            <div>
                Clicks - {count}
                <br></br>
                <button style={{marginRight:"10px"}} onClick={() => setCount(initialCount)}>Reset Count</button>
                <button style={{marginRight:"10px"}} onClick={incrementCounter}>Inc by 6</button>
                <button onClick={() => setCount(count-2)}>Dec by 2</button>
            </div>
            <br></br>
            <div>
                Clicks - {countCorrect} - Using a better way!
                <br></br>
                <button style={{marginRight:"10px"}} onClick={() => setCountCorrect(initialCount)}>Reset Count</button>
                <button style={{marginRight:"10px"}} onClick={incrementCounterCorrect}>Inc by 6</button>
                <button onClick={() => setCountCorrect(prevVal => prevVal-2)}>Dec by 2</button>
            </div>
        </div>
    )
}

export default AsyncUseSate