import React, { Component } from 'react'

class LeftcycleCompChild extends Component {
    constructor(props) {
      super(props)
      console.log("lifeCycle Child - constructor implemented");
      console.log(props);
      
      this.state = {
         "name" : "Makarand Patil",
         "job" : "Software Engineer"
      }

      this.triggerUpdateLifeCycle = this.triggerUpdateLifeCycle.bind(this);
    }

    static getDerivedStateFromProps(props,state) {        
        console.log("lifeCycle Child - getDerivedStateFromProps implemented");
        console.log(props, state);

        return null;
    }

    componentDidMount() {
        console.log("lifeCycle Child - componentDidMount implemented");
    }
    
    //updating lifecycle methods
    shouldComponentUpdate(nextProps,nextState) {
      console.log("lifeCycle Child - shouldComponentUpdate implemented");
      return true;
    }

    getSnaphotBeforeUpdate(prevProps, prevState) {
      console.log("lifeCycle Child - getSnaphotBeforeUpdate implemented");
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
      console.log("lifeCycle Child - componentDidUpdate implemented");
    }

    triggerUpdateLifeCycle(oEvent) {
      console.log(this.state.name);
      this.setState({name : "Mak Patil"});
      console.log(this.state.name);
    }

  render() {
    console.log("lifeCycle Child - render implemented");
    return (
      <div>
        <div>LeftcycleCompChild</div>
        <button onClick={this.triggerUpdateLifeCycle} >Trigger Update lifecycle methods</button>
      </div>
    )
  }
}

export default LeftcycleCompChild