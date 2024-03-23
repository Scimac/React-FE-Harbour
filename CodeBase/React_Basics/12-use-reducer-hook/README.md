### useReducer Hook

- This hook is used for state management, just like `useState()` hook, more of a primitive hooks to `useState()` Hook
- The `useReducer()` Hook is based upon the `reducer()` function that is used in vanilla JS.

- The `reduce()` method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. 

- The final result of running the reducer across all elements of the array is a single value.

```
const array1 = [1, 2, 3, 4];
const initialValue = 0;

// 0 + 1 + 2 + 3 + 4
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

```

- `reduce(callbackFunction, initailValue)` takes two argument,
    - `callbackFunction(currentValue, previousValue)` - this function takes again 2 arguments. 
    - `initailValue` - value considered as baseline before calling **callbackfunction on each element on the array.**

- `useReducer(reducer, initailState)` - useReducer hooks takes two argument as well.
- `newState = reducer(currentState, action)` - `reducer` function takes in two arguments, returns newState value.
-  `[newState, dispatch]` - But useReducer returns an array just like `useState()`, with new state and a `dispatch` function.

### useState() vs useReducer() Hook

| Scenario | useState  | useReducer  |
|---|---|---|
| Type of state |	Number, String, Boolean	| Object or Array |
| Number of state transitions | One or two |	Too many |
|Related state transitions? |	No | Yes |
| Business logic | No business logic |	Complex business logic|
| Local vs global |	Local |	Global |


### Learn through code - 

1. [Implementing counter using `useReducer()` hook with simple state and action parameters](./src/components/SimpleStateCounter.js)

2. [Implementing counter using `useReducer()` hook with complex state obj for holding multiple counter values and action obj with action type and value](./src/components/ComplexStateCounter.js)

3. [Learn how to implement multiple `useReducer()` hooks with same internal `reducer()` mechanism](./src/components/MultipleuseReducerHooks.js)

4. [Using `useReducer()` and `useContext()`, implement a global shared counter. (GLOBAL STATE MANAGEMENT/REDUX ADJACENT)](./src/components/GlobalCounter.js)