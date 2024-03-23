### useMemo() Hook

- `useMemo()` memoizes state value for future use instead of calculating it again on parent rerendering. Though everytime the dependency changes, the function is re-triggered and value is calculated again.

- `useMemo()` will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

    ```
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b),
     [a, b]);
    ```

    **If no array is provided, a new value will be computed on every render.**

### useCallback() Hook

- `useCallback()` hook is used to optimize performance during re-rendering of components. 

- Sometimes when the parent component re-renders, it causes all the components to re-render causing performace issues. To prevent that following measures can be take - 

    - For components that are repeatedly used in the application, wrap the exported component in `React.memo(componentName)` which ensures the component is only rerendered when there is a change in it's props or state.

        `export default React.memo(Button)`

    - Everytime the parent function rerenders, the **handler functions are created anew**, i.e their memory references changes, thus the `React.memo()` will cause them to rerender once the prop has changed (Even though the function object is same with different reference to memory) **(Functions being a Non-primitive datatype)**.

    - `useCallback()` will return a memoized version of the function that only changes if one of the dependencies passed has changed.

        ```
        const memoizedCallback = useCallback(() => {
            doSomething(a, b);
        }, [a, b],);
        ```

- `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.

- Major difference between the two is -  `useMemo()` stores the result of the function passed based on the dependencies and `useCallback()` stores the function itself, preventing it from creating a new reference everytime the parent component rerenders.

- [GO through the callback code... Minor hiccup resolved there](./src/components/UseCallbackDemo.js)

### useRef() Hook

- This hook helps in accessing the DOM element direclty to which the hook is assiciated using the `ref=` reserved prop of the element.

    `const inputRef = useRef(null)`

    `<input ref='inputref' value={inputVal} onChange={changeValHandler} type='text' />`

- `useRef()` can also be used to build a generic container inside `.current` attribute to hold reference to some DOM properties like timer, Intervals, etc.

- **`useRef()` does not cause rerendering of components even when the value inside the `.current` is changing.**

### useRef() Hook