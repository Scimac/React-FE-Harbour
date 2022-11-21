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
    }
});


module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;