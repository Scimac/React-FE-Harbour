import React from 'react';

const FunnctionalEvent = (props) => {
    function onBtnClick() {
        alert("FUNCTIONAL COMP EVENT \nOnly thing is to remember, Use camel casing while attaching the event to the element tag.")
    }

    return (
        <div>
            <button onClick={onBtnClick}> Functional Event Info </button>
        </div> 
    )
}

export default FunnctionalEvent