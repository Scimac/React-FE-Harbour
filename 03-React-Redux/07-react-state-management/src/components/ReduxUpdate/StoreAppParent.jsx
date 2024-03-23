import React, { createRef, useEffect } from "react";
import { connect } from "react-redux";
import StoreAppFirstChild from "./StoreAppFirstChild";
import StoreAppSecondChild from "./StoreAppSecondChild";

const StoreAppParent = (props) => {
  const countRef = createRef(0);

  useEffect(() => {
    countRef.current.innerText = Number(countRef.current.innerText) + 1;
  });

  return (
    <div className="container col alignCenter">
      <h2>Parent which wraps store</h2>
      {/* <span>{`count - ${props.count}`}</span> */}

      <div className="row marginBlock">
        <span>Number of Re-Renderings - </span>
        <span ref={countRef}>0</span>
      </div>
      <div className="container row">
        <StoreAppFirstChild />
        <StoreAppSecondChild />
      </div>
    </div>
  );
};
export default StoreAppParent;
