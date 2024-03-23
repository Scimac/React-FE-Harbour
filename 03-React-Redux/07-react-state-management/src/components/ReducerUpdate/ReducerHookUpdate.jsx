import React, { createRef, useEffect, useReducer } from "react";
import "../../App.css";

function reducerFunction (state, action) {
  switch (action.type) {
    case "increaseCount":      
      return state + action.payload;
    case "decreaseCount":
        return state - action.payload;
    default:
      return state;
  }
};

const ReducerHookUpdate = () => {
  const [counter, dispatch] = useReducer(reducerFunction, 0);
  const countRef = createRef(0);

  useEffect(() => {
    countRef.current.innerText = Number(countRef.current.innerText) + 1
  });

  return (
    <div className="container col alignCenter">
      <h2>Counter Updated based on Reducer Hook State</h2>
      <div className="row marginBlock">
        <span>Number of Re-Renderings - </span>
        <span ref={countRef}>0</span>
      </div>
      <div className="row counterAlignment">
        <button className="buttonCls" onClick={() => dispatch({type: "increaseCount", payload: 1})}>
          +
        </button>
        <h3 className="counterValue">{counter}</h3>
        <button className="buttonCls" onClick={() => dispatch({type: "decreaseCount", payload: 1})}>
          -
        </button>
      </div>
    </div>
  );
};

export default ReducerHookUpdate;
