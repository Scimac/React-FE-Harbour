import React, { Component } from 'react'

class CounterClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    

    fnincrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count+1}
        });
    }

  render() {

    return (
      <div>
        <button onClick={this.fnincrementCount}>Clicks - {this.state.count}</button>
      </div>
    )
  }
}

export default CounterClassComp