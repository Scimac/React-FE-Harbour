import React, { Component } from 'react'
import ChildForwardRef from './ChildForwardRef'

class ParentForwardRefs extends Component {
    constructor(props) {
      super(props)
    
      this.state = {}
      this.classCompref = React.createRef();
    }

    focusOnQue = () => {
        this.classCompref.current.focus();
    }

  render() {
    return (
      <div>
        <h3>Forwarding Refs</h3>
        Parent for Forwarding Refs
        <br/>
        <br/>
        <ChildForwardRef name='Sample child' />
        <br/>
        <ChildForwardRef name='Child to be focused' ref={this.classCompref} />
        <br />
        <button onClick={this.focusOnQue}>Focus on input</button>
      </div>
    )
  }
}

export default ParentForwardRefs