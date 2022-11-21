import React from 'react'
import { connect } from 'react-redux/es/exports'
import { buyCake } from '../redux/cakes/cakeActions'
import { buyIceCream } from '../redux/icecreams/icecreamActions'

const ItemCounter = (props) => {
    return (
        <div>
            <h1>The number of cakes are {props.numOfItems}</h1>
            <button onClick={props.buyItem}>Buy {props.isCake ? "Cake" : "IceCream"}</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        numOfItems: ownProps.isCake ? state.cakes.numOfCakes : state.iceCreams.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buyItem: () => ownProps.isCake ? dispatch(buyCake()) : dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(ItemCounter);