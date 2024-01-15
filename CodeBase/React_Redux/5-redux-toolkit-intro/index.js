const store = require('./features/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/iceCreamSlice').icecreamActions;
const fetchUsers = require('./features/users/usersSlicer').fetchUsers;

// console.log("Actions", cakeActions);
// console.log("Initial State", store.getState());
// console.log("Actions", icecreamActions);

//Action type and creator function is dynamically created in redux-toolkit.
// Action.type is made using the Slice name specified by the user and the reducer function name. 

// action cake/ordered @ HH:MM:SSS
//    prev state { cake: { numOfCakes: 15 }, icecream: { numOfIcecreams: 30 } }
//    action     { type: 'cake/ordered', payload: undefined }
//    next state { cake: { numOfCakes: 14 }, icecream: { numOfIcecreams: 30 } }

const unsubscribe = store.subscribe(() => {});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(cakeActions.restocked(6));
// store.dispatch(icecreamActions.restocked(20));

unsubscribe();