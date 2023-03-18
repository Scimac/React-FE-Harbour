import React, {Component} from "react";
import { ChildComp } from "./ChildComp";

class ParentComp extends Component {
    constructor (props) {
        super (props)

        this.state = {
            message: 'Hello Parent, This is Me, '
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent (name) {
        alert(`${this.state.message}` + name)    
    }

    render () {
        return (
            <div>
                {/* greetHandler is a prop that is passed to the child component from the parent component */}
                <ChildComp greetHandler = {this.greetParent} >First Child</ChildComp>
                <ChildComp greetHandler = {this.greetParent} >Second Child</ChildComp>
            </div>
        )
    }
}

export default ParentComp