### Hooks in React

- Hooks were introduced in React version 16.8 which allows user to use react features without using class component.
- Class properties such as states, etc. can be used in functions based on the hooks we include in the component file.

#### Requirement of hooks

1. People have a hard time in JS!!
    - It is difficult to work with `this` keyword in complex scenarios.
    - All Event handlers need to be binded in React class components.
    - Class components don't minify well and make hot reloading very unreliable.

2. Need of sharing stateful logic in a better way
    - Classes have a common state object maintained which helps in implementing stateful logic in the class components.
    - for functional components, render props and HOC solves this issue but for each functionality we need to implement separate render prop or HOC making code complicated.

3. Code is not arranged properly (actually an issue in Class component)
    - For complex tasks viz. fetching data from server and event handling, code is generally written in -
        a. fetching data - componentDidMount() or componentDidUpdate()
        b. event listeners - subscribe in componentDidMount() and unsubscribe in componentDidUpdate()
    - related code is scattered and unrelated code is present in one place.

### useState() Hook

- earlier we need to use **class component** if need to use states in the components. 
- Look into the code for comparision of implementation of counter using hooks and stateful class component.

- `useState()` is an function that is imported from the react library (named import) and return an array of length = 2, i.e `[variableName, setterFunction] = useState(defaultValue)`   **---> we set it to a destructured array for easier use**

    `const [count, setCount] = useState(0)`

#### Some important points to remember - 
    - **Call hooks only at the top level of functional comps.** Do not call hooks inside nested loops, conditions or functions.
    - **Only call hooks from React functions not from any random JS function.** 

#### Using previous values

> `useState()` and `useEffect()` hooks **updates the value bit asynchronously**, therefore use arrow functions with previous state as argument, while setting values using setter function in loops, to store the previous value.

- Same behaviour is seen in the `setState()` function of the class components for updating the states.

- Setting a new value in state by using setState or useState hook is an asynchronous process.

    If you want to log the new value once it has changed, you have to couple it with the useEffect hook

    ```
        useEffect(() => {
        console.log(isLoading)
        }, [isLoading]);
    ```

- check out `AsyncUseState.js` for better understanding.

#### Spread operator and useState() hook

- the `setState()` method of the class components is refined and merges the updated states passed to the function, with other values in the state object.

- in `useState()` doesn't have this feature availalble and the earlier values will get overwritten based on the new values updated using `useState()`.

- Always use **spread operator** while updating the new values uisng useState hook.