import React, { Component } from 'react';

class ClassCompRefs extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        //DOM object gets logged in the console
        console.log(this.inputRef);
        this.inputRef.current.focus();
    }

    render() {        
        return (
            <div>
                <h3>Class Comp Refs</h3>
                <input placeholder='Focus here using refs - class Comp' ref={this.inputRef} />
            </div>
        );
    }
}

export default ClassCompRefs;