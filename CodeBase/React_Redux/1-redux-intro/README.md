### Concepts of Redux

#### Pointers abt `Node.js`:

- `Node.js` follows the **CommonJS module system**, and the builtin `require()` function is the easiest way to include modules that exist in separate files. 

- The basic functionality of `require()` is that it reads a JavaScript file, executes the file, and then proceeds to return the exports object.

- Read this for more example: [Example of a simple library in node.js](https://nodejs.org/en/knowledge/getting-started/what-is-require/)

#### Project Setup: 

- requirements : `node` and `npm` must be installed in your system.
- In the project folder directory run command, `npm init --yes`    
        --> `--yes` automatically responds yes to all prompt questiions.

- install `redux` as a dependency and the setup is complete.


#### Redux - Principles and Components

- There are three core concepts in Redux - 
    1. Store : Store ia an object that holds the states of the application.
    2. Action : Action is a string that describes the change that will be performed on the state of the application.
    3. Reducer : Reducer is the function that actually carries out the tarnsition of the states based on the 'Action' that is to be performed

#### Three principle of Redux

- **The state of the whole application is stored in an object tree within a single redux store.**
- **The only way to change the state is to emit the action, an object describing what happened.**
- **To specify how the state tree is transformed bt actions, you write pure reducers.**
      - `Reducers - (prevState, action) => newState`

    [Redux update cycle | 200](./resources/redux.png)

#### Implementation of actions

- `Action` carries information of what change needs to be done in the state of the object.
- `Action` is necessary to have `type` property to specify the action.

- Not necessary to declare at the top, but better in case object subjected to change 
`const BUY_CAKE = 'BUY_CAKE';`

- `Action generator` - this is recommended. it makes changing the action object easy when it is passed at multiple places

    ```
    const buyCake = () => {
        return {
            type: BUY_CAKE,
            info: 'Action to update the state i.e cake reduces by one.'
        }
    }
    ```

- Calling an Action.
``

#### Redux store

- Responsibiliites of redux store:
    1. Holds application store.
    2. Allows access to the state by exposing `getState()` method
    3. Allows the state to be updated by exposing `dispatch(action)` method based on the action passed.
    4. Registers event listeners to the state object by exposing `subscribe(listener)`. `subscribe()`is triggers everytime the state object updates and listener is triggered.
    5. Handles the unregistering of the event listner function passed in the argument of `subscribe()` by using the function i.e returned by the `subscribe(listner)` method.
        `const unsubscribe = subscribe(() => do something)`

- For implementing first import the `redux` library.
  - `const redux = require('redux')`

- Creating a new store.
  `const store = redux.createStore(reducer);`

- **Althought after the introduction of `Redux Toolkit` this way of creating the store is deprecated.**

#### Multiple reducers

- If we have multiple processes which require maintaining the states, it is recommended to use multiple reducers for multiple processes for the sake of scalability. We can even store them in separate files.

- checkout the [implementation here](index.js)

#### Combined Reducers

- If we are using multiple reducers, we need to combine them as `createstore(reducer)` takes only one reducer as input.

- // It is standard to name the combine reducer as rootReducer
    ```
    const rootReducer = redux.combineReducers({
        cakes : reducer_Cakes,
        icecreams : reducer_IceCreams
    })
    ```

- Note how the state shanged when combined reducers were used - 

    - **Before -**
        ```
        Initial state is { numOfCakes: 20, numOfIceCreams: 10 }
        Update state is { numOfCakes: 19, numOfIceCreams: 10 }
        ```

    - **After -**
        ```
        Initial state is { cakes: { numOfCakes: 20 }, icecreams: { numOfIceCreams: 10 } }
        Update state is { cakes: { numOfCakes: 19 }, icecreams: { numOfIceCreams: 10 } }
        ```

### Middlewares

- It is the recommended way of using the reducers with extra functionality.
- Provides a third party extension between the action is dispatched and the moment it reaches the reducer.
- Middlewares is used for **logging, crash reporting, performing asynchronous actions, etc.**

- here, [redux-logger](https://www.npmjs.com/package/redux-logger) is the middleware that is used. check out the [implementation here](./index.js).

- Implementing logger from `redux-logger` :
    - Import the library in the file - `const reduxLogger = require('redux-logger');`
    - Envoke the create logger function from the **redux-logger library** - `const logger = reduxLogger.createLogger();`
    - Add the logger as a middleware to the store during creation 
        `const store = redux.createStore(rootReducer, redux.applyMiddleware(logger));`

- We can include as many middlewares as required in the single store.