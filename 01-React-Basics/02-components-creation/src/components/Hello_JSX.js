import React from 'react'

export const HelloJSX = () => {
    return <div className = 'wrapperClass'>
        <h2> This is JSX for React</h2>
    </div>
}

export const HelloVanilla = () => {
    return React.createElement('div', {
        'id' : 'WrapperId',
        'className' : 'wrapperClass'
    }, React.createElement('h1', null, 'This is the Vanilla JS'))
}