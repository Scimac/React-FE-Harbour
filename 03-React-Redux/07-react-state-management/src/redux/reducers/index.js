import { combineReducers } from "redux";
import countReducer from "./countReducer/countReducers";

const reducers = combineReducers({
    countReducer: countReducer,
});

export default reducers;