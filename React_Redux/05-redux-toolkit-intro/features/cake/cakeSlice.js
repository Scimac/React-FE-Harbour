const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfCakes : 15
}


//One thing abt declaring reducers in clreateSlice() function is that we don't have to explicitly return newState.
// Also, we don't have to copy and update using spread operator, we can directly mutate the existing state.

//We don't even need to write action type and creators, CreateSlice() does it for us!

const cakeSlice = createSlice({
    name : "cake",
    initialState : initialState,
    reducers : {
        ordered : (state) => {
            state.numOfCakes -= 1
        },
        restocked : (state, action) => {
            state.numOfCakes += action.payload
        }
    }
});


// default export
module.exports = cakeSlice.reducer;

// named export
module.exports.cakeActions = cakeSlice.actions;