import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import asyncReducer from "./AsyncReducers";

const store = createStore(asyncReducer, applyMiddleware(thunk));

export default store;