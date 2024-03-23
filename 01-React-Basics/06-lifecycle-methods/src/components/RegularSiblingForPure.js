import React, { Component } from 'react'

class RegularSiblingForPure extends Component {
  render() {
    console.log("Rendering regular sibling for pure");
    return (
      <div>RegularSiblingForPure - {this.props.name}</div>
    )
  }
}

export default RegularSiblingForPure