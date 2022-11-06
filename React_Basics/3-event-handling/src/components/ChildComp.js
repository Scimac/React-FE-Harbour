import React from "react";

export const ChildComp = (props) => {
    return (
        <div>
            {/* use this when we have no parameter to pass to the parent method */}
            {/* <button onClick={props.greetHandler}> Greet Parent </button> */}
            <button onClick={()=>props.greetHandler(props.children)}> Greet Parent </button>
        </div>
    )
}