import React, { Component } from 'react'

class ChildRefLadder extends Component {
    constructor(props) {
      super(props)
    
      this.state = {}
      this.inputRef = React.createRef();
    }

    focusInputElement () {
        this.inputRef.current.focus();
    }

  render() {
    return (
      <div>
        Child for Ref Ladder
        <br/>
        <input placeholder='Click button to focus' ref={this.inputRef} />
      </div>
    )
  }
}

export default ChildRefLadder