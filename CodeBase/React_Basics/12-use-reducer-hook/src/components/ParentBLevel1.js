import React from 'react'
import ChildBlevel2 from './ChildBlevel2'

const ParentBLevel1 = () => {
  return (
    <div className='marginSmallAll borderBox'>
      Component B - First Lvl
      <br />
      <ChildBlevel2 />
    </div>
  )
}

export default ParentBLevel1