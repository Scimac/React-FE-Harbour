// const redux = require('redux');
// const axios = require('axios');

import redux from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const thunkMiddleware = thunk.default;

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

const InitialState = {
    "loading" : false,
    "data" : [],
    "error" : ''
};

const fetchUsersTriggered = () => {
    return {
        type : FETCH_USERS_REQUEST,
        info : 'Action for triggering the user fetch api'
    }
};

const fetchUsersSuccess = (users) => {
    return {
        type : FETCH_USERS_SUCCESS,
        info : 'Action for fetching users is success',
        payload : users
    }
};

const fetchUsersError = () => {
    return {
        type : FETCH_USERS_ERROR,
        info : 'Action for fetching users has failed',
        payload : error
    }
}


//this is an action creator which can cause sideeffects like async service calls, dispatching actions, etc. 
const fetchUsers = () => {
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

const reducer = (prevState = InitialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...prevState,
                loading : true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...prevState,
                loading : false,
                data : action.payload
            }            
        case FETCH_USERS_ERROR:
            return {
                ...prevState,
                loading : false,
                error : action.payload
            }
        default:
            return prevState;
    }
} 

const store = createStore(reducer,applyMiddleware(thunkMiddleware));
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchUsers());