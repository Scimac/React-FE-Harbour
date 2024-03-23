import { FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./AsyncActionsTypes";
import axios from 'axios';

const fetchUsersTriggered = () => {
    return {
        type: FETCH_USERS_REQUEST,
        info: 'Action for triggering the user fetch api'
    }
};

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        info: 'Action for fetching users is success',
        payload: users
    }
};

const fetchUsersError = (error) => {
    return {
        type: FETCH_USERS_ERROR,
        info: 'Action for fetching users has failed',
        payload: error
    }
};

//this function is impure which can cause sideeffects like async service calls, dispatching actions, etc. 
// NOT LIKE OTHER ACTION CREATORS

// The async actions won't be triggered unless middleware is includded
export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersTriggered());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                const users = res.data.map((user) => user.name);
                dispatch(fetchUsersSuccess(users));
            }).catch((error) => {
                console.log('fail')
                dispatch(fetchUsersError(error.message));
            })
    }
}
