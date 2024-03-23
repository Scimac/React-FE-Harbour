## Implementation of React Redux library

This is a step by step guide for using redux with react projects using `react-redux` library.

### Step 1: Set Up Your React Project
Create a new React project using Create React App:

```bash
npx create-react-app react-redux-counter
cd react-redux-counter
```

### Step 2: Install Dependencies
Install Redux and React Redux:

```bash
npm install redux react-redux
```

### Step 3: Create Redux Actions
Create a file named `actions.js` to define Redux actions:

```javascript
// actions.js
export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});
```

### Step 4: Create Redux Reducers
Create a file named `reducers.js` to define Redux reducers:

```javascript
// reducers.js
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
```

### Step 5: Create Redux Store
Create a file named `store.js` to create the Redux store:

```javascript
// store.js
import { createStore } from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

export default store;
```

### Step 6: Connect Redux to React Components
- Modify the `App.js` file to connect Redux to React components:
- We can also use the `connect()` HOC and `mapDispatchToProps`, `mapStateToProps` methods to connect and use the store in a component. But it adds to much boilerplate code.

```javascript
// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
```

### Step 7: Provide Redux Store
Modify the `index.js` file to provide the Redux store to the React app:

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

### Step 8: Run Your Application
Start your React application:

```bash
npm start
```
