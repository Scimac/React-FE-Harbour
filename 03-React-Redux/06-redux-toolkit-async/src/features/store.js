import { configureStore } from '@reduxjs/toolkit';
// import { reduxLogger }  from 'redux-logger';
import cakeReducer from './cake/cakeSlice';
import icecreamReducer from './icecream/iceCreamSlice';
import userReducer from './users/usersSlicer';

// const logger = reduxLogger.createLogger();


const store = configureStore({
    reducer : {
        cake : cakeReducer,
        icecream : icecreamReducer,
        users : userReducer
    },
    // Returns any array containing the default middleware installed by configureStore(). 
    // Useful if you want to configure your store with a custom middleware array but still keep the default set.
    // middleware : () => getDefaultMiddleware().concat(logger)
});

export default store;