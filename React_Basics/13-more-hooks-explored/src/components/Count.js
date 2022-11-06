import React from 'react'

const Count = ({text,count}) => {
  console.log(`Rendering ${text} Component`);
  return (
    <span>{text} - {count} </span>
  )
}

// Added memo to not to rerender if unnecessary
export default React.memo(Count)