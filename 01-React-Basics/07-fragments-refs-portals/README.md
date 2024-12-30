## Fragments

- While returning a component, all the children elements need to be enclosed in one single parent tag.
- Fragments lets you group children elements without adding any extra nodes to the DOM tree.

- This is helpful when we need to create a component returning multiple elements and cannot be enclosed in a div tag due to element hierarchy issues like in tables.

    ```
    return (
            <table>
                <tbody>
                    <FragmentComp />
                </tbody>
            </table>
        );

    return (
            <div>
                <td > Column 1 </td>
                <td > Column 2 </td>
                <td > Column 3 </td>
            </div>
        );

    named-references.js:1 Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.
                                    at td
                                    at div
                                    at FragmentComp
                                    at tbody
                                    at table
                                    at ParentTable
                                    at div
                                    at App
    ```

- Instead, we use a `<> </>` empty tag or `React.Fragment` tag to enclose such child elements.
- Fragment tag only supports one attribute, i.e `key` used when rendering lists.


## Refs

- `Refs` helps us to access and interact with the `DOM node` directly to which the `ref` is connected to.
- There are two ways for implementing `refs` - 

1. First create a ref in the constructor of the component, so that it is accessible throughout the component.
    `this.inputRef = React.createRef();`
    Bind this ref to the element using the reserved `ref` attribute.
    `<input placeholder='Focus here using refs - class Comp' ref={this.inputRef} />`
    for using the ref in a function, just call it using - 
    `console.log(this.inputRef);`

2. This method just breaks down what is being done in `React.createRef()` method - 

    in the constructor, create a method to set a element to a attribute in `this` of the scope - 

        ```
        this.setRef = (element) => {
            this.callBackRef = element
            return
        }
        ```
    Bind this ref to the element using the reserved `ref` attribute.
    `<input placeholder='Focus here using refs - class Comp' ref={this.setRef} />`
    for using the ref in a function, just call it using - 
    `console.log(this.callBackRef);`
        ```
        if (this.callBackRef) {
            console.log(this.callBackRef); 
        }
        ```

### Calling children component refs from the parent class component

- It is like `ref` ladder. Element is accessed through the `ref` and the method associated in turn calls the child ref to perform certain action.

- Check the file for code.

### Forwarding refs frm parent to child

- Above technique can be used among the class components for getting `ref` to child component. But still we need to attach a separate method to it.

- To generalize this part, we use forwarding of `refs`.

- most of the steps are same but the only difference is how we create the child component.

- Instead of declaring the functional component normally - 
    ```
    function ChildForwardRef() {
        return (
            <div>ChildForwardRef</div>
        )
    }
    ```

    we declare it - 

    ```
    const ChildForwardRef = React.forwardRef(
    (props,ref) => {
        return (
            <div>
                {props.name}
                <br/>
                <input placeholder='this is input for {props.name}' ref={ref} />
                <br/>
            </div>
        )
    }
    ```

    The `forwardRef()` method passes `refs` along with the `props` to the child component.

### Portals

- Portals in React provide a way to render any child element, out of the current DOM hierarchy it is present in.
- To create a portal:
    - Import react library REACTDOM to your file.
    - instead of returning jsx, we return the response provided by -
        `REACTDOM.createPortal(jsx, node_to_which_portal_to)`

- Benefits of Portals - 
    1. Event bubbling still occurs as the event propogates to the components current ancestors instead of ancestors where it was injected in the new DOM tree.
    2. Helps us get out of CSS implemented for the parent and to some other new div and implement our own CSS.
    3. Can be used to show dialog boxes and popovers.
