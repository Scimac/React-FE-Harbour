import React from 'react'

const ChildErrorBoundary = ({name,descriptor}) => {
    if (descriptor === 'Villain') {
        throw new Error("There is a Villain among us!!")
    }

    return (
        <div>I am {name}, The {descriptor}. </div>
    )
}

export default ChildErrorBoundary