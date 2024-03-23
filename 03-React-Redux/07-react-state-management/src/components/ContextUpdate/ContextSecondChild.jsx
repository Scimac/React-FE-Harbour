import React, { createRef, useEffect } from "react";
import ContextThirdChild from "./ContextThirdChild";
import "../../App.css";

const ContextSecondChild = () => {
    const countRef = createRef(0);

    useEffect(() => {
      countRef.current.innerText = Number(countRef.current.innerText) + 1
    });


    return <div className="container col alignCenter margin2">
        <h2>Second Child</h2>
        <div className="row marginBlock">
            <span>Number of Re-Renderings - </span>
            <span ref={countRef}>0</span>
        </div>
        <ContextThirdChild />        
    </div>;
};

export default ContextSecondChild;