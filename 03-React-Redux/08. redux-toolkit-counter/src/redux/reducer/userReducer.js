import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
    name: 'userList',
    initialState: {
      userList: ['user 1']
    },
    reducers: {
      addUser: (state,action) => {
        let userList = [...(state.userList)];
        state.userList = [...userList, `User ${userList?.length + 1}`];
      },
      removeUser: (state, action) => {
        let updatedState = [...state.userList]
        updatedState?.splice(action.payload, 1);
        state.userList = [...updatedState];
      }
    }
  });
  
  export const { addUser, removeUser } = userReducer.actions;
  export default userReducer.reducer;