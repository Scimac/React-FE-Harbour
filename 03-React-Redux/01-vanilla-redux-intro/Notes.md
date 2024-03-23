## Working with Vanilla Redux in JS apps

### Step 1: Set Up Your Project
Create a new directory for your project:

```bash
mkdir vanilla-redux-counter
cd vanilla-redux-counter
```

### Step 2: Initialize npm
Initialize npm in your project directory:

```bash
npm init -y
```

### Step 3: Install Redux
Install Redux in your project:

```bash
npm install redux
```

### Step 4: Create Redux Actions
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

### Step 5: Create Redux Reducers
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

### Step 6: Create Redux Store
Create a file named `store.js` to create the Redux store:

```javascript
// store.js
import { createStore } from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

export default store;
```

### Step 7: Create HTML Interface
Create an `index.html` file with a simple HTML interface to display the counter and buttons:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vanilla Redux Counter</title>
</head>
<body>
  <div id="counter"></div>
  <button id="increment">Increment</button>
  <button id="decrement">Decrement</button>

  <script src="index.js"></script>
</body>
</html>
```

### Step 8: Connect Redux to HTML Interface
Create an `index.js` file to connect Redux to the HTML interface:

```javascript
// index.js
import { increment, decrement } from './actions';
import store from './store';

const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

const render = () => {
  const state = store.getState();
  counterElement.innerText = `Counter: ${state.count}`;
};

render();

store.subscribe(render);

incrementButton.addEventListener('click', () => {
  store.dispatch(increment());
});

decrementButton.addEventListener('click', () => {
  store.dispatch(decrement());
});
```

### Step 9: Serve Your Application
Use a local server to serve your HTML file. You can use a simple server like `http-server`:

```bash
npm install -g http-server
http-server .
```

Now, your vanilla Redux counter application is up and running! Open your browser and navigate to the URL provided by the local server to see the counter in action. You can increment and decrement the counter value by clicking the buttons, with the state being managed by Redux.