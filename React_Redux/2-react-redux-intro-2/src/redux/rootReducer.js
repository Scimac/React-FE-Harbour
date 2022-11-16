import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducers";
import iceCreamReducer from "./icecreams/icecreamReducers";

const rootReducer = combineReducers({
    cakes: cakeReducer,
    iceCreams: iceCreamReducer
});

export default rootReducer;