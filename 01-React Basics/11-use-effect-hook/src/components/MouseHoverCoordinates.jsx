import React, { useEffect, useState } from 'react'

function MouseHoverCoordinates() {
    const [xCoordinate, setXCoordinate] = useState(0);
    const [yCoordinate, setYCoordinate] = useState(0);

    let logMousePosn = (e) => {
        setXCoordinate(e.clientX);
        setYCoordinate(e.clientY);
    };

    useEffect(() => {
        window.addEventListener("mousemove", logMousePosn)

        return () => {
            window.removeEventListener("mousemove", logMousePosn);
        }
    },[]);

    return (
        <div>
            <h1>X co-ordinate: {xCoordinate}</h1>
            <h1>Y co-ordinate: {yCoordinate}</h1>
        </div>
    )
}

export default MouseHoverCoordinates