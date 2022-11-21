const configureStore = require('@reduxjs/toolkit').configureStore;
const { getDefaultMiddleware } = require('@reduxjs/toolkit');
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const cakeReducer = require('./cake/cakeSlice');
const icecreamReducer = require('./icecream/iceCreamSlice');

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        icecream : icecreamReducer
    },
    // Returns any array containing the default middleware installed by configureStore(). 
    // Useful if you want to configure your store with a custom middleware array but still keep the default set.
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

module.exports = store;