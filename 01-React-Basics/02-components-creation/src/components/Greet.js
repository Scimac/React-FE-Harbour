import React from 'react'

// function Greet () {
//     return <h1>Hello User!</h1>
// }

//alternate way of declaring a component
const Greet = () => { return <h1>Hello User!</h1> }

//this is called named export
export const Welcome = () => {return <h2>Welcome to MacReact</h2>}

//this is called default export
export default Greet