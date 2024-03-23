import React, { useState } from 'react'
import MouseHoverCoordinates from './MouseHoverCoordinates';

function MouseContainer() {
    const [displayToggle, setToggle] = useState(true);

    return (
        <div>
            <button onClick={()=> setToggle(!displayToggle)} >Toggle Co-ordinates Tracker</button>

            {displayToggle && <MouseHoverCoordinates />}        
        </div>
    )
}

export default MouseContainer