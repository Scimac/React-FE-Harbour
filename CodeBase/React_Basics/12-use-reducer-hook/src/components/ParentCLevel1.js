import React from 'react'
import ParentCLevel2 from './ParentCLevel2'

const ParentCLevel1 = () => {
  return (
    <div className='marginSmallAll borderBox'>
      Component C - First Lvl
      <br />
        <ParentCLevel2 />
    </div>
  )
}

export default ParentCLevel1