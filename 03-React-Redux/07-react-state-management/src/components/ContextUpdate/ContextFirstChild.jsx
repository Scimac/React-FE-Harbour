import React, { createRef, useContext, useEffect } from "react";
import { CountContext } from "./ContextParent";
import "../../App.css";

const ContextFirstChild = () => {
    const countRef = createRef(0);
    const {count, handleCounter} = useContext(CountContext);

    useEffect(() => {
      countRef.current.innerText = Number(countRef.current.innerText) + 1
    });


    return <div className="container col alignCenter margin2">
        <h2>First Child</h2>
        <div className="row marginBlock">
            <span>Number of Re-Renderings - </span>
            <span ref={countRef}>0</span>
        </div>
        
      <div className="row counterAlignment">
        <button className="buttonCls" onClick={() => handleCounter("add", 1)}>
          +
        </button>
        <h3 className="counterValue">{count}</h3>
        <button className="buttonCls" onClick={() => handleCounter("substract", 1)}>
          -
        </button>
      </div>
    </div>;
};

export default ContextFirstChild;