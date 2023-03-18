## lifecycle methods

- These are the methods provided by REACT which we can override at particular stages during the lifecycle of application

- These methods are usually used for the **class components** and are not availalbe for functional components. Hooks like `useEffects` are used in functional components to use lifecycle methods

- Mainly the lifecycle methods are classified into four parts - 
    - **Mounting**:
        When the instance of a component is being created or inserted into the DOM.
        Methods : 
        - `constructor(props)`: Gets called whenever a new component is created. Used to initialize state or binding event handlers. It is advised to not make HTTP requests in this method which may cause sideeffects.

        `super(props)` is called in the `constructor()` to attach it to the `base constructor`.

        - `static getDerivedStateFromProps(props,state)`: When the state of the component depend on the props passed over time. Being a static nmethod, it does not have access to `this`, therefore `this.state` cannot be done.
        
        - `render()`: required method. Here, we read props and state and return JSX. again don't make any JS HTTP calls in this method.
        
        - `componentDidMount()`: Invokes immediately after all the children components are loaded in the DOm along with their lifecycle. **Perfect method to make data initializations, HTTP calls and load data** 

    - **Updating**:
        When the component is re-rendered as a change in `state` or `prop`
        Methods : 
        - `static getDerivedStateFromProps(props,state)`: Called everytime the component is updated or rerendered. don't make http calls here. 
        
        - `shouldComponentUpdate(nextProps,nextState)`: used for performance optimization by returning `true` or `false` by comparing `nextProps` and `nextState` to the current ones. Rarely used, don't make http requests here.
        
        - `render()`: Same as above render() in mounting cycle.
        
        - `getSnaphotBeforeUpdate(prevProps, prevState)`: This method is called just before updating the DOM based on Virtual DOM. We can capture some values and used it further in our code. returns value or null.
        
        - `componentDidUpdate(prevProps, prevState, snapShot)`: called when the rendering is finished in the re-render cycle. we can make AJAX calls here, it is recommended to compare previous and new props to make sure components are updated to avoid making unwanted calls.

    - **Unmounting**:
        When component is being removed from the DOM tree.
        Methods : 
        - `componentWillUnmount()`: tasks like cancelling the network requests, removing subscriptions, event handlers and timers are done in this method.

    - **Error Handling**:
        When there is a error during rendering, in a lifecycle method, or in constructor of child
        Method : 
        - `static getDerivedStateFromError(error)`: This method is used to render a **fallback UI** if the error is thrown, as React dismounts the whole DOM tree if there is an error which disrupts the whole application.
        
        - `ComponentDidCatch(error, info)` : This method logs the error into the console. This is a bit redundant method as React by default logs errors in console.

        #### Error Boundary:
        It is a component that implements one or both of the above methods is called an `Error Boundary`.

        > Consider adding an error boundary to your tree to customize error handling behavior. 
        React Message when an error occurs!!

        Error boundary is an element which is wrapped around other elements to render fallback UI, localize the error and saving our whole app from going unfunctional.


## Pure Components

- Pure components are the components which perform `shouldComponentUpdate(nextProps,nextState)` method based on the shallow comparision of the props and states.

while a regular component do not perform `shouldComponentUpdate(nextProps,nextState)` method --- return `true` by default.

### Shallow comparision vs Deep Comparision

- for the primitive data types both types of comparision is same.
- but for complex data types like arrays, objects - 
    > if you make a shallow copy of these data types, they have two different DS variable names but reference to same object/array.
 shallow copy will return `true` in this case since both variable point towards same object, but deep comparision will return `false`.

### Use cases of pure components.

- Performance boost while rendering structured elements like tables lists. We do not need to rerender them unless necessary. 

> Make sure while using the pure components, you are returning/setting a new object to the state, not just performing a action on current one. this won't cause the pure component to re-render when required.

**If parent is pure component and it won't render, the regular components who are children of this pure component will also not rerender.**

**For getting similar results in functional component, use -**
`export default React.memo(Component_Name)` while exporting the `functional component`.