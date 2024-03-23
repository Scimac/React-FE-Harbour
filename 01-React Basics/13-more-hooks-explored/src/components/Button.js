import React from 'react'

const Button = ({children,evtHandler}) => {
    console.log(`Rendering ${children} Btn`);
  return (
    <button onClick={evtHandler}> {children} </button>
  )
}

// Added memo to not to rerender if unnecessary

//but the button is still rerendering, using useCallBack to rectify
export default React.memo(Button)