### useEffect() Hook

- `useEffect()` hook is used to cause side effect onto the **functional components** based on the effects that are being cause in React.

- In class components, we have lifecycle methods like `componentDidMount()`,`componentWillUnmount()`,`componentDidUpdate()` to cause these sideEffects.

#### useEffect replacing ComponentDidMount() and componentDidUpdate()

- `useEffect()` is a function in React that is triggered everytime the component is rendered for first and every other time.

- This functionality is handled in class components using the lifecycle methods.

    ```
    useEffect(() => {
        console.log("Rerendering the Functional Component each time");
    });
    ```

> The aboce code demonstrates the behaviour like the `componentDidMount()` function for the first iteration and `componentDidUpdate()` for teh rest.

- The behaviour of the `useEffect()` hook can be controlled as per the requirements. 

##### useEffect() hooks triggered only when a Single State changes:

- Instead of triggering `useEffect()` everytime component re-renders, it can be triggered based on change of a specifics state or set of states.

- to control this, simply pass on an additional argument as **an Array of states that needs to be monitored for triggering.**

    ```
    useEffect(() => {
        console.log("Rerendering the Functional Component");
        console.log("count updated from class comp");
    }, [count]);
    ```

> The aboce code demonstrates the behaviour like the `componentDidUpdate(prevProps, prevState)` function with prevProps and prevStates argument provided


##### useEffect() hooks triggered only once on load:

- If the `useEffect()` needs to be run only once, just pass the second argument as an empty array.

    ```
    useEffect(() => {
        console.log("Rendering the Functional Component only once!");
    }, []);
    ```

> The aboce code demonstrates the behaviour like the `componentDidMount()` lifecycleMethod.

##### useEffect() hooks for componentWillUnmount():

- Some cleanup needs to be done for the components like resetting the data from JSONs, cleaning the event listeners, setting exit parameters, etc.

- In class components these operations are performed in `componentWillUnmount()` lifecycle method. But in `useEffect()` hook, a function is returned which is later used by React hooks to do cleanup for the same `useEffect()` hook.

    ```
    useEffect(() => {
        window.addEventListener("mousemove", logMousePosn)

        return () => {
            window.removeEventListener("mousemove", logMousePosn);
        }
    },[]);
    ```

- **while keeping an [] array as dependency for `useEffect()`, make sure all the function calls also have no dependency else -** 
    - **it will not update the values of the states that are dependent in the function,** 
    - **OR it will update the states and not re-render the component.**