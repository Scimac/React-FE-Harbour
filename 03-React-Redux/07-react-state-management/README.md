## State Management Demonstration

### Using Local State

1. Create a functional component for the counter.
2. Define a state variable to hold the counter value.
3. Implement functions to increment and decrement the counter value.
4. Render the counter value and buttons to perform increment and decrement actions.

#### Code Example:
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

### Using useReducer hook

1. Define initial state and a reducer function for the counter.
2. Use the useReducer hook to create state and dispatch function.
3. Dispatch actions to increment and decrement the counter value.
4. Handle state updates in the reducer function.

#### Code Example:
```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state=initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload : 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload : 1 })}>Decrement</button>
    </div>
  );
}

export default Counter;
```

### Prop drilling using Context API

1. Create a context for the counter state.
2. Define a provider component to manage the counter state and provide it to child components.
3. Implement actions to increment and decrement the counter value.
4. Consume the context in child components to access the counter state and actions.

#### Code Example:
```jsx
// CounterContext.js
import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const useCounter = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
```

```jsx
// CounterComponent.js
import React from 'react';
import { useCounter } from './CounterContext';

function CounterComponent() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterComponent;
```

### Global state using Redux

1. Set up Redux store with reducers for managing the counter state.
2. Define action types and action creators for incrementing and decrementing the counter value.
3. Dispatch actions from components to update the counter state.
4. Connect components to Redux store using `connect` or `useSelector` and `useDispatch` hooks.

#### Code Example:
```bash
npm install redux react-redux
```

```jsx
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1; },
    decrement: state => { state.value -= 1; }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

```jsx
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export default configureStore({
  reducer: { counter: counterReducer }
});
```

```jsx
// CounterComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function CounterComponent() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default CounterComponent;
```

## Some useFul links

- https://dev.to/mgustus/react-different-types-of-state-management-3m6n
- https://www.freecodecamp.org/news/how-to-manage-state-in-react/
- https://blog.logrocket.com/modern-guide-react-state-patterns/

