import React from 'react'
import { connect } from 'react-redux/es/exports'
import { buyCake } from '../redux/cakes/cakeActions'

const CakesCounter = (props) => {
    return (
        <div>
            <h1>The number of cakes are {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}


//These are the functions that basically destructures the states and actions of the store
// We can set any name to these fucntions, but this is standard naming conventions

// Below function gets the redux state as argument and returns the destructured state out of it
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cakes.numOfCakes
    }
}

// Below function gets the redux store dispatch method as argument and returns object with actions to dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

// the above funcitons are passed as an argument to a Higher Ordered Component HOC exposed by react-redux library
//  connect() HOC

export default connect(
    mapStateToProps,
    mapDispatchToProps)(CakesCounter);