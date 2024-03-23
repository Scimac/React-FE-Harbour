import React, { Component } from 'react'

export class CounterClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0,
            name : ''
        }
    }

    componentDidMount() {
        document.title = `${this.state.count} Clicks from ClassComp`;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Rerendering the Class Component");
        // this is used to check whether there is an unwanted rerendering or not
        if (prevState.count !== this.state.count) {
            console.log("count updated from class comp")
            document.title = `${this.state.count} Clicks from ClassComp`;
        }
    }

    render() {
        return (
        <div>
            Class implementation
            <br></br>
            <br></br>
            <button onClick={() => this.setState({count : this.state.count + 1})}>Clicks for Class Event - {this.state.count}</button>
            <br></br>
            <input 
                value={this.state.name} 
                type="text" 
                onChange={(e) => this.setState({name : e.target.value})} 
                placeholder="Please enter your name here" />
        </div>
        )
    }
}

export default CounterClass