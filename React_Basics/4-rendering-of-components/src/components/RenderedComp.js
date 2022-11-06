import React from 'react'

export default function RenderedComp (props) {
    return (
        <h3>
            Iteration {props.divDB.num} from Looper, this is div {props.divDB.name}
        </h3>
    )
}