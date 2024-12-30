import React from 'react'

//Instead of creating the Functional component the usual way - 

// function ChildForwardRef() {
//   return (
//     <div>ChildForwardRef</div>
//   )
// }

//We create is using the forward ref method

const ChildForwardRef = React.forwardRef(
    (props,ref) => {
        return (
            <div>
                {props.name}
                <br/>
                <input placeholder='this is input for {props.name}' ref={ref} />
                <br/>
            </div>
        )
    }
)

export default ChildForwardRef