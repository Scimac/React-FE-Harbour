## Implementation of Redux Toolkit

### Step 1: Set Up Your React Project

```bash
npm create vite@latest my-redux-app
cd my-redux-app
```

### Step 2: Install Redux Toolkit
Install Redux Toolkit and React Redux in your project:

```bash
npm install @reduxjs/toolkit react-redux
```

### Step 3: Define Your Redux Slice
A Redux slice contains the actions and reducers for a specific slice of your application state. Create a new file for your slice, for example `counterSlice.js`:

```javascript
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

### Step 4: Create Your Redux Store
Combine your slices and create the Redux store. In your `index.js` or `App.js`, set up your Redux store:

```javascript
// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import App from './App';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Step 5: Connect Redux to Your Components
Connect your React components to the Redux store using `useSelector` and `useDispatch` hooks provided by React Redux:

```javascript
// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function App() {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
```

### Step 6: Run Your Application
Start your React application and see Redux Toolkit in action:

```bash
npm start
```

## Extra Reducers

### Enhance Your Redux Store with Extra Reducers

- In Redux Toolkit, you can enhance your Redux store by adding extra reducers. 
- Extra reducers allow you to **handle actions from multiple slices within a single reducer function**. 
- This can be useful for managing cross-cutting concerns or handling actions that affect multiple slices of your application state.

#### Define Extra Reducers

```javascript
// extraReducers.js
import { createSlice } from '@reduxjs/toolkit';

const extraReducerSlice = createSlice({
  name: 'extraReducers',
  initialState: {
    status: 'idle',
    error: null
  },
  reducers: {
    // Define additional reducers here
  },

  // Thing to notice here is increment and decrement are the actions from Counter SLice
  // Still, here we can perform extra changes if those actions are triggered
  extraReducers: {
    'counter/increment': (state) => {
      state.status = 'incrementing';
    },
    'counter/decrement': (state) => {
      state.status = 'decrementing';
    },
    // Add more extra reducers as needed
  }
});

export default extraReducerSlice.reducer;
```

#### Update Redux Store Configuration

```javascript
// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import extraReducerReducer from './extraReducers';
import App from './App';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    extraReducers: extraReducerReducer // Add extra reducer to store
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

#### Dispatch Actions in Components

```javascript
// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function App() {
  const counter = useSelector(state => state.counter.value);
  const status = useSelector(state => state.extraReducers.status); // Access extra reducer state
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h2>Status: {status}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
```

### Conclusion

- By adding extra reducers to your Redux store, you can handle actions from multiple slices in a centralized manner. 
- This allows you to manage cross-cutting concerns and improve the maintainability of your Redux codebase. 
- Use extra reducers when actions need to affect multiple parts of your application state.