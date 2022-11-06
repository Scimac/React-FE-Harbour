// Implementation of a simple cake and ice-cream shop

const redux = require('redux');
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

//Action              ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// It carries information of what change needs to be done in the state of the object
//  It is necessary to have 'type' property to specify the action

//Not necessary to declare at the top, but better in case subjected to change 
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// Action generator - this is recommended. it makes changing the action object easy when it is passed at multiple places
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'Action to update the state i.e cake reduces by one.'
    }
}

const buyIcecream = () => {
    return {
        type: BUY_ICECREAM,
        info: 'Action to update the state i.e icecream reduces by one.'
    }
}

//Reducer             +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Reducer takes in (initialState, action) => newState is returned

const initialStateCakes = {
    numOfCakes : 20
}

const initialStateIcecreams = {
    numOfIceCreams : 10
}

//We can use only one reducer to satisfy our need... But it is recommended
// to use multiple reducers for multiple processes for the sake of scalability. We can even store them in separate files.

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             // we duplicate the state object using spread (removing the key value pairs out of object), adn update only the one that is required
//             ...state,
//             numOfCakes : state.numOfCakes - 1
//         }
        
//         case BUY_ICECREAM: return {
//             // we duplicate the state object using spread (removing the key value pairs out of object), adn update only the one that is required
//             ...state,
//             numOfIceCreams : state.numOfIceCreams - 1
//         }

//         default: return state;
//     }
// }

const reducer_Cakes = (state = initialStateCakes, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }

        default: return state;
    }
}

const reducer_IceCreams = (state = initialStateIcecreams, action) => {
    switch (action.type) {        
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams : state.numOfIceCreams - 1
        }

        default: return state;
    }
}

// It is standard to name the combine reducer as rootReducer
const rootReducer = redux.combineReducers({
    cakes : reducer_Cakes,
    icecreams : reducer_IceCreams
})

//Store             +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Store is created using the function i.e is imported from the redux library although this function is deprecated now.... 

// USE REDEX TOOLKIT FOR CREATING STORES

const store = redux.createStore(rootReducer, redux.applyMiddleware(logger));

//the getState() method gives us access to the current state - view only
console.log('Initial state is', store.getState());

// the subscribe method allows us to pass an event listener to be triggered every time the state is updated
// A unsubscribe event to remove the event listener is returned and captured for calling it in future.

const unsubscribe = store.subscribe(() => {});
// const unsubscribe = store.subscribe(() => console.log('Update state is', store.getState()));

//Calling the actions using the dispatch method to create a change in state.
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyCake());
store.dispatch(buyIcecream());

unsubscribe();