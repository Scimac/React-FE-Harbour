import React, { Component } from 'react'

class StateClass extends Component {
    //Check more abt this
    constructor() {
            super()

            this.state = {
                message: "Hi User, Please Subscribe!",
                switchMsg: false,
                counter: 0
            }
        }

    changeMessage() {
        this.setState({
            message: "Thanks for subscribing ^^",
            switchMsg: true
        })
    }

    increaseCount() {
        // This won't increase the count in UI element, just the varialble will get updated
        // this.state.counter += 1

        this.setState({
            counter: this.state.counter + 1
        }, () => {
            console.log('callback', this.state.counter)
        });

        //Since this logger is for asynchronous call (setState as well as console.log), 
        //      it is one behind the current count as count gets updated late

        // React sends all the setState calls as async call to increase performance
        console.log('Function', this.state.counter)
    }

    render() {

        return (
            //Remeber, this function needs a wrapper class as only one element can be returned
            <div>
                <h3> { this.state.message } </h3>                
                
                {/* //Attention! the function call is no csmel casing as opposed to small case in HTML */}
                { this.state.switchMsg ? null : <button onClick={() => this.changeMessage()} >Subscribe</button> }
                { this.state.switchMsg ? <h2> { this.state.counter } </h2> : null }
                { this.state.switchMsg ? <button onClick={() => this.increaseCount()} >Increase Count</button> : null }
            </div>
        )
    }
}

export default StateClass