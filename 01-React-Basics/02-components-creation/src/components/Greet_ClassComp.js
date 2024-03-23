import React, { Component } from 'react'

class GreetClass extends Component {
    render () {
        return <h2> This is from Class Component </h2>
    }
}

export const PropFuncComp = (props) => {
    return (
        //limitation we have here is that we can return only one html element wrapping multiple children
        <div>
            <p> Let's learn about {props.name}. This is accessed by {props.CompType} </p>
            {props.children}
        </div>
    )
}

export class PropClassComp extends Component {
    render () {
        return (
            <div>
                <p> Let's learn about {this.props.name}. This is accessed by {this.props.CompType} </p>
                {this.props.children}
            </div>
        )
    }
}

export default GreetClass

