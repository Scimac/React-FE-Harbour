import React, { Component } from 'react'
import ChildContext from './ChildContext'
import HooksMultipleContextsConsumer from './HooksMultipleContextsConsumer';
import MultipleContextsConsumer from './MultipleContextsConsumer';
import UserContext from './userContext'

class ParentLvl2 extends Component {
    // static contextType = UserContext;
    render() {
        return (
        <div>
            <ChildContext />
            <br />
            <hr />
            
            This is rendered by using ContextType, Did you understand, {JSON.parse(this.context).userName} ?
            <br />
            <br />
            <hr />

            <MultipleContextsConsumer />
            <br />
            <br />
            <hr />
            
            <HooksMultipleContextsConsumer />
            <br />
            <br />
            <hr />
        </div>
        )
    }

}

ParentLvl2.contextType = UserContext;

export default ParentLvl2