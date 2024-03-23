import React, {Component} from "react";

export default class ClassEvent extends Component {
    onBtnClick() {
        this.setState({
            message:"User message changed!!"
        }, () => {
            alert(this.state.message)
        })
    }

    onEventHandle = () => {
        this.setState({
            message:"Event Handled!!"
        }, () => {
            alert(this.state.message)
        })
    }

    constructor (props) {
        super (props) 

        this.state = {
            message:'Hello User'
        }

        this.onBtnClick = this.onBtnClick.bind(this);
    }

    render () {
        return (
            <div>
                <button onClick={this.onBtnClick}> Class Event Info </button>
                <button onClick={this.onEventHandle}> Event binding </button>
            </div>
        )
    }
}