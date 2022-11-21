import { BUY_ICE_CREAM } from "./icecreamTypes";

const initialState = {
    numOfIceCreams : 50
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCreams : state.numOfIceCreams - 1
            }    
        default:
            return state
    }
}

export default iceCreamReducer;