import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    render() {
        return (
            <div>
                <h4 onMouseOver={this.props.countIncrementFn} > {this.props.name} hovered {this.props.count} times. </h4> 
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10)