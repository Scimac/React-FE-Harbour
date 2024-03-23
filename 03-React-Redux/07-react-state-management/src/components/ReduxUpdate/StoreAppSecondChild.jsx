import React, { createRef, useEffect } from "react";
import "../../App.css";
import { connect } from "react-redux";
import { decreaseCount, increaseCount } from "../../redux/reducers/countReducer/countActions";
import StoreAppThirdChild from "./StoreAppThirdChild";

const StoreAppSecondChild = (props) => {
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
        
        <StoreAppThirdChild />
    </div>;
  };
  
  export default StoreAppSecondChild;
  