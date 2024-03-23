import React from 'react'

function ClickByRenderProp(props) {
  return (
    <div>
        <button onClick={props.countIncrementFn} > User clicked {props.count} times. </button> 
    </div>
  )
}

export default ClickByRenderProp