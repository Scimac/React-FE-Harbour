import React, { Component } from 'react';
import PureComponentTest from './PureComponentDemo';
import RegularSiblingForPure from './RegularSiblingForPure';

class ParentForPure extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name : "render pure comp"
        };
        // this.rerenderCycle = this.rerenderCycle.bind(this);
    }

    // rerenderCycle() {
    //     setTimeout(() => {
    //         this.setState({name : "render pure comp"});
    //     }, 2000);
    // }

    componentDidMount() {
        // this was causing to change only once
        // this.rerenderCycle();

        //this didn't improve things either
        setTimeout(() => {
            this.setState({name:"test"});
        }, 200);
    }

  render() {
    console.log("############## Rendering parent for pure ##################");
    return (
      <div>
        ParentForPure
        <RegularSiblingForPure name={this.state.name} />
        <PureComponentTest name={this.state.name} />
      </div>
    )
  }
}

export default ParentForPure