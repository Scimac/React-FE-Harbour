import React, { createRef, useEffect, useState } from "react";
import "../../App.css";

const StateUpdate = () => {
  const [counter, setCounter] = useState(0);
  const countRef = createRef(0);

  const handleCounter = (operator, value) => {
    if (operator === "add") {
      setCounter((prev) => {
        return prev + value;
      });
    } else if (operator === "substract") {
      setCounter((prev) => {
        return prev - value;
      });
    }
  };

  useEffect(() => {
    countRef.current.innerText = Number(countRef.current.innerText) + 1
  });

  return (
    <div className="container col alignCenter">
      <h2>Counter Updated based on State</h2>
      <div className="row marginBlock">
        <span>Number of Re-Renderings - </span>
        <span ref={countRef}>0</span>
      </div>
      <div className="row counterAlignment">
        <button className="buttonCls" onClick={() => handleCounter("add", 1)}>
          +
        </button>
        <h3 className="counterValue">{counter}</h3>
        <button className="buttonCls" onClick={() => handleCounter("substract", 1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default StateUpdate;
