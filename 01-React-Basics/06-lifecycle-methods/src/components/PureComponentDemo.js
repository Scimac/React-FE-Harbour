import React, { PureComponent } from 'react'

class PureComponentTest extends PureComponent {
  constructor(props) {
    super(props)
        
    this.state = {
      name : "Pure Comp"
   }

   this.rerenderpureOnclick = this.rerenderpureOnclick.bind(this);
  }
  
  rerenderpureOnclick() {
    this.setState({name : "Rerendered pure component."});
  }

  render() {
    console.log("Rendering pure component");
    return (
      <div>
        <div>PureComponentTest - {this.props.name} </div>
        <button onClick={this.rerenderpureOnclick} >Update pure element</button>
      </div>
    )
  }
}

export default PureComponentTest