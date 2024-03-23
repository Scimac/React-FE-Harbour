import React from 'react'
import withCounter from './withCounter'

function ClickCounter(props) {
  return (
        <div>
            <button onClick={props.countIncrementFn} > {props.name} clicked {props.count} times. </button> 
        </div>
  )
}

export default withCounter(ClickCounter, 5)