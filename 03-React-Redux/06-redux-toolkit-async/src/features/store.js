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

    //This was added due to the following error -- 
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })

    // VM464:6 A non-serializable value was detected in an action, in the path: `payload.headers`. Value: 
    // AxiosHeaders {cache-control: 'max-age=43200', content-type: 'application/json; charset=utf-8', expires: '-1', pragma: 'no-cache'}

    /* From Stack Overflow -- https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using

    - We've always told Redux users they should not put non-serializable values in the store. 
    - Redux Toolkit was specifically designed to help provide good defaults when setting up a Redux store, and as part of that, it includes checks to make sure you're not accidentally mutating your data and that you're not including non-serializable values.
    - Class instances are by definition not fully serializable, so it's correctly flagging those instances as a problem.
    - In general, React and Redux apps should be written using only plain JS objects and arrays as data. You don't need "model classes".

    // read more on - https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants
    // read more on - https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data

    */

    // Returns any array containing the default middleware installed by configureStore(). 
    // Useful if you want to configure your store with a custom middleware array but still keep the default set.
    // middleware : () => getDefaultMiddleware().concat(logger)
});

export default store;