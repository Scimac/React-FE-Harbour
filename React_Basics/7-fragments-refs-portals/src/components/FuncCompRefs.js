import React from 'react';

function FuncCompRefs(props) {
    let createRef = () => {
        
    }
    
    return (
        <div>
            <h3>Refs</h3>
            <input placeholder='Focused here using refs' ref={createRef()}/>
        </div>
    );
}

export default FuncCompRefs;