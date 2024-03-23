import React from 'react'

const Title = (props) => {
  return (
    <h3>{props.name}</h3>
  )
}

// Added memo to not to rerender if unnecessary
export default React.memo(Title)