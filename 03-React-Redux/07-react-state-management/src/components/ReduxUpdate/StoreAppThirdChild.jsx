import React, { createRef, useEffect } from "react";
import "../../App.css";
import { connect } from "react-redux";
import { decreaseCount, increaseCount } from "../../redux/reducers/countReducer/countActions";

const StoreAppThirdChild = (props) => {
    const countRef = createRef(0);

    useEffect(() => {
      countRef.current.innerText = Number(countRef.current.innerText) + 1
    });

    return <div className="container col alignCenter margin2">
        <h2>Third Child</h2>
        <div className="row marginBlock">
            <span>Number of Re-Renderings - </span>
            <span ref={countRef}>0</span>
        </div>
        
      <div className="row counterAlignment">
        <button className="buttonCls" onClick={() => props.increaseCount(1)}>
          +
        </button>
        <h3 className="counterValue">{props.count}</h3>
        <button className="buttonCls" onClick={() => props.decreaseCount(1)}>
          -
        </button>
      </div>
    </div>;
  };

  const mapStateToProps = (state) => ({
    count: state.countReducer.count,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    increaseCount: (number) => dispatch(increaseCount(number)),
    decreaseCount: (number) => dispatch(decreaseCount(number)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(StoreAppThirdChild);
  