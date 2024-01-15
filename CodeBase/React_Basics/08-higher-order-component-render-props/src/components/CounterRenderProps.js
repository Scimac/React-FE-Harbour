import React, { Component } from 'react'

class CounterRenderProps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            version:"1.01"
        }

    }

    incrementCount = () => {
        this.setState((prevState) => {
            return { count : prevState.count + Number(this.props.freqn) }
        })
        return
    }

    render() {
        return (
        <div>
            {this.props.children(this.state.count, this.incrementCount)}

            {/* if the prop is passed as normal prop, use -             
            {this.props.render(this.state.count, this.incrementCount)} */}

        </div>
        )
    }
}

export default CounterRenderProps