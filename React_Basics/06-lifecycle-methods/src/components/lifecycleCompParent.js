import React, { Component } from 'react'
import LeftcycleCompChild from './leftcycleCompChild';

class LifecycleCompParent extends Component {
    constructor(props) {
      super(props)
        console.log("lifeCycle Parent - constructor implemented");
        console.log(props);
      this.state = {
         
      }
    }

    static getDerivedStateFromProps(props,state) {        
        console.log("lifeCycle Parent - getDerivedStateFromProps implemented");
        console.log(props, state);
        
        return null;
    }

    componentDidMount() {
        console.log("lifeCycle Parent - componentDidMount implemented")
    }

    //updating lifecycle methods
    shouldComponentUpdate(nextProps,nextState) {
        console.log("lifeCycle Parent - shouldComponentUpdate implemented");
        return true;
    }

    getSnaphotBeforeUpdate(prevProps, prevState) {
        console.log("lifeCycle Parent - getSnaphotBeforeUpdate implemented");
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("lifeCycle Parent - componentDidUpdate implemented");
    }

    render() {
        console.log("lifeCycle Parent - render started");
        return (
        <div>
            <span>LeftcycleCompParent</span>
            <LeftcycleCompChild></LeftcycleCompChild>
        </div>
        )
    }
}

export default LifecycleCompParent