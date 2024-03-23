import React from 'react'
import ChildCLevel2 from './ChildCLevel2'

const ParentCLevel2 = () => {
  return (
    <div className='marginSmallAll borderBox'>
      Component C1 - Second Lvl
      <br />
        <ChildCLevel2 />
    </div>
  )
}

export default ParentCLevel2