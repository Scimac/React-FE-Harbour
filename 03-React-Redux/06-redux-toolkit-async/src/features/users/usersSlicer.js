import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    loading : false,
    users : [],
    error : ''
};

// createAsyncThunk has two arguments (name of the action, callback function that returns a promise)
// we need to create reducers for pending, fulfilled and rejected state of the prmomise.
export const fetchUsers = createAsyncThunk('users/fetchusers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => res)
});

const userSlice = createSlice({
    name : "users",
    initialState,
    extraReducers : builder => {
        builder.addCase(fetchUsers.pending, (state=initialState) => {
            state.loading = true;
        });

        builder.addCase(fetchUsers.fulfilled, (state=initialState, action) => {
            state.loading = false;
            state.error = '';
            console.log('#')
            console.log('#')
            console.log('#')
            console.log('#')
            console.log(action.payload.length)
            console.log('#')
            console.log('#')
            console.log('#')
            console.log('#')
            if (action.payload.length > 0) state.users = action.payload;
        });
        
        builder.addCase((state=initialState, action) => {
            state.loading = false;
            state.users = [];
            if (action.error.message.length > 0) state.error = action.error.message;
        });
    }
});

export default userSlice.reducer;