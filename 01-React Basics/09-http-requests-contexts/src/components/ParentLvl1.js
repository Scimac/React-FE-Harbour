import React, { Component } from 'react'
import ParentLvl2 from './ParentLvl2'

class ParentLvl1 extends Component {
  render() {
    return (
      <div>
        <ParentLvl2 />
      </div>
    )
  }
}

export default ParentLvl1