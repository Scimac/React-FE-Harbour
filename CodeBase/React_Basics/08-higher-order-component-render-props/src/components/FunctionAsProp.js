import React from 'react'

function FunctionAsProp(props) {
  return (
    <div>
        Let's call it both ways - 
        <br />
        1 - {props.render(false)}
        <br />
        2 - {props.render(true)}
    </div>
  )
}

export default FunctionAsProp