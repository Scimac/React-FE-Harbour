## Asynchronous Redux

- Earlier, the cake and ice-cream example was a kind of **Synchronous Actions**. **The actions were getting dispatched and the state was updated immediately.**

- Asynchronous actions have delay in between the `action dispatch` and `state update` processes. E.g **Data Fetching**.

#### Project setup

- `redux` is required as a dependency for creating and loading the store with user ids fetched from the APIs.
- `axios` for making API calls
- `redux-thunk` is a default way to `create async action creators` which can return functions as output while taking in `dispath()` as argument.

#### State in Async 

- In asynchronous scenarios, the state typically includes the following properties: 
    ```
    const state = {
        loading : false,
        data : [],
        error : ''
    }
    ```

- `loading`: Indicates whether the asynchronous operation is in progress.
- `data`: Holds the fetched data from the API.
- `error`: Stores any error that occurs during the API request.

#### Actions in Async

- `FETCH_USERS_REQUEST`: Signals the start of the data fetching process.
- `FETCH_USERS_SUCCESS`: Indicates successful retrieval of data.
- `FETCH_USERS_ERROR`: Denotes an error encountered during data fetching.

#### Reducers for Async Operations

The reducers handle state updates based on the dispatched actions:

```javascript
switch (action.type) {
  case 'FETCH_USERS_REQUEST':
    return {
      ...state,
      loading: true
    };
  case 'FETCH_USERS_SUCCESS':
    return {
      ...state,
      loading: false,
      data: action.payload
    };
  case 'FETCH_USERS_ERROR':
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  default:
    return state;
}
```

- When `FETCH_USERS_REQUEST` is dispatched, `loading` is set to `true`.
- Upon successful data retrieval (`FETCH_USERS_SUCCESS`), `loading` is set to `false`, and the fetched `data` is stored in the state.
- In case of an error (`FETCH_USERS_ERROR`), `loading` is set to `false`, and the `error` message is stored in the state.

## Implementation of Async Redux using Thunk Middleware

#### Step 1: Set Up Redux Store

Ensure you have Redux and Redux Thunk installed in your project. If not, you can install them using npm or yarn:

```bash
npm install redux redux-thunk
# or
yarn add redux redux-thunk
```

Create a Redux store with Thunk middleware applied:

```javascript
// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Your root reducer file

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
```

#### Step 2: Define Action Creators

- Create action creators for fetching data asynchronously. 
- Asynchronous action creators return a async function, as in contrast to  the synchronous action creators who return an action object.
- These action creators will dispatch **multiple actions**: one when the request starts, another when it succeeds, and one if there's an error.
- The return function will have access to `dispatch` and `getState` functions.

```javascript
// actions.js
import axios from 'axios';

export const fetchUsersRequest = () => ({
  type: 'FETCH_USERS_REQUEST'
});

export const fetchUsersSuccess = (users) => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: users
});

export const fetchUsersError = (error) => ({
  type: 'FETCH_USERS_ERROR',
  payload: error
});

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios.get('https://api.example.com/users')
      .then(response => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchUsersError(errorMsg));
      });
  };
};
```

#### Step 3: Create Reducers

Define reducers to handle the dispatched actions and update the state accordingly.

```javascript
// reducers.js
const initialState = {
  loading: false,
  data: [],
  error: ''
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      };
    case 'FETCH_USERS_ERROR':
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default usersReducer;
```

#### Step 4: Connect Redux to React Components

Connect your Redux store to React components using `react-redux` library.

```javascript
// UsersComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './actions';

const UsersComponent = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersComponent;
```

#### Step 5: Wrap Your App with Redux Provider

Wrap your root component with `Provider` from `react-redux` to make the Redux store available to all components in your app.

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

With these steps, you have implemented Redux Thunk for handling asynchronous actions in your Redux-powered React application.