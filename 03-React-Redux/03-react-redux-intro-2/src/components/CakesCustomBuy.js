import React, { useState } from 'react'
import { connect } from 'react-redux/es/exports'
import { buyCake } from '../redux/cakes/cakeActions'

const CakesCustomCounter = (props) => {
    const [buyNumCakes, setBuyNumCakes] = useState(1);
    return (
        <div>
            <h1>The number of cakes are {props.numOfCakes}</h1>
            <input placeholder='Number of cakes to buy' type="text" value={buyNumCakes}
                onChange={evt => setBuyNumCakes(evt.target.value)} />
            <button onClick={() => {props.buyCake(buyNumCakes)}}>Buy {buyNumCakes} Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cakes.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(CakesCustomCounter);