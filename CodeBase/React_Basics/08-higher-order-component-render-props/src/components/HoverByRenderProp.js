import React from 'react'

function HoverByRenderProp(props) {
  return (
    <div>
        <h4 onMouseOver={props.countIncrementFn} > User hovered {props.count} times. </h4>
    </div>
  )
}

export default HoverByRenderProp