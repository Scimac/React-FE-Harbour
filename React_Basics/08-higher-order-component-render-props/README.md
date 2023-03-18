### Higher Ordered Components

- Higher Ordered Components are used to share a common functionality among many components which may not have common ancestor.

- E.g here we have implemented counter functionality based on **clicking** of a button and **hovering** of cursor on a div.

- Higher Ordered Components (HOC) are the pattern where function takes in a component as an argument and returns another component with desired functionality as an output.

> let EnhancedComponent = higherOrderedComponent(OriginalComponent)

- HERE, Check the `withCounter.js` for more information here.

- Some important things to note - 
    - if some props are passed down from the parent component of the wrapped component for use, the props will get passed to the HOC wrapping the wrappedComponent, not to the child of that parent.

    - USE `spread` operator to pass all the props as shown in `withCounter.js`.

    - We can treat the HOC as nowmal JS function and pass extra parameters to it.

### Passing functions as props to component

- We can pass function to the component as props, and anything can be rendered based on the function output.
- This is the foundation for the `Render Props` concept.

### Render Props

- It is a technique of sharing a functionality between multiple components unsing `props whose value is a function`.
- read code for more infor on render props