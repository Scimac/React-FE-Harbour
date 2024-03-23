// alias used in order to distinguish from icecream/ordered
import { ordered as cakeOrdered } from '../cake/cakeSlice';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfIcecreams : 30
}

const icecreamSlice = createSlice({
    name : "icecream",
    initialState : initialState,
    reducers : {
        ordered : (state) => {
            state.numOfIcecreams -= 1
        },
        restocked : (state, action) => {
            state.numOfIcecreams += action.payload
        }
    },
    // F0r reducing one ice cream for each cake bought
    
    // extraReducers : {
    //     ['cake/ordered'] : (state) => {
    //         state.numOfIcecreams -= 1
    //     }
    // }

    extraReducers : (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecreams -= 1
        });
    }
});


export const { ordered, restocked } = icecreamSlice.actions;
export default icecreamSlice.reducer;