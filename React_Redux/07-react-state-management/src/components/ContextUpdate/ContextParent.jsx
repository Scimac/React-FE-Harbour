import React, { createContext, createRef, useEffect, useState } from "react";
import ContextFirstChild from "./ContextFirstChild";
import ContextSecondChild from "./ContextSecondChild";
import "../../App.css";

export const CountContext = createContext();

const ContextParent = () => {
    const countRef = createRef(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
      countRef.current.innerText = Number(countRef.current.innerText) + 1
    });


    const handleCounter = (operator, value) => {
      if (operator === "add") {
        setCount((prev) => {
          return prev + value;
        });
      } else if (operator === "substract") {
        setCount((prev) => {
          return prev - value;
        });
      }
    };


    return <div className="container col alignCenter">
        <h2>Parent which passes context</h2>
        <span>{`count - ${count}`}</span>

        <div className="row marginBlock">
            <span>Number of Re-Renderings - </span>
            <span ref={countRef}>0</span>
        </div>
        
        <CountContext.Provider value={{count, handleCounter}} >
            <div className="row" >
                <ContextFirstChild />
                <ContextSecondChild />
            </div>
        </CountContext.Provider>
    </div>;
};

export default ContextParent;