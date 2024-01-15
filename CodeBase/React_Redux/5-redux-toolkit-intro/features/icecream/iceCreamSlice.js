const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

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
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecreams -= 1
        });
    }
});


module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;