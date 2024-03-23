import { DEC_COUNT, INC_COUNT } from "./countActionTypes";

const initialState = {
    count: 0,
};

const countReducer = (state=initialState, action) => {
    switch (action.type) {
        case INC_COUNT:
            return {
                ...state,
                count: state?.count + action.payload,
            };    
        case DEC_COUNT:
            return {
                ...state,
                count: state?.count - action.payload,
            };   
        default:
            return state;
    }
};

export default countReducer;