import React, { Component } from 'react'
import ChildRefLadder from './ChildRefLadder'

class ParentRefLadder extends Component {
    constructor(props) {
      super(props)
    
      this.state = {}

      //Here, we have created ref to a Class Component instead of a html element
      this.classCompRef = React.createRef();
    }

    focusOnChild = () => {
        //we directly call the focusInputElement() method as the child class already posseses this method
        this.classCompRef.current.focusInputElement();
    }

  render() {
    return (
      <div>
        <h3>Ref ladder</h3>
        Parent for Ref Ladder
        <br/>
        <br/>
        <ChildRefLadder ref={this.classCompRef} />
        <br/>
        <button onClick={this.focusOnChild} >Click to focus</button>
      </div>
    )
  }
}

export default ParentRefLadder