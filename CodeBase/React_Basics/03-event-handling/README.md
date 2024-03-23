### Event Handling

There are events attached to various actions done by the user such as mousedown, mouseup, hover, click, etc. 
Various actions can be performed based on these events

Events are to be added in camel case and the function name to be included in curly braces.
`<button onClick={onBtnClick}> Functional Event Info </button>`

For functional/class components - 
Event handler functions can be directly added in the component itself. Handler Functions are same as js events.


### Event Binding

Events need to be binded because of the `this` keyword, `this` keyword sometimes gets undefined or gets wrong scope due to functions.

There are 4 main methods for binding - 

1. directly using `bind` and bind handler to the renderer functions

`<button onClick={this.onBtnClick.bind(this)}> Functional Event Info </button>`

This method may cause the component to rerender when data is is updated.

2. Using arrow function to attach event handler.

`<button onClick={() => this.onBtnClick()}> Functional Event Info </button>`

3. Most preferred for event binding

    ```
        constructor (props) {
            super (props) 

            this.state = {
                message:'Hello User'
            }

            this.onBtnClick = this.onBtnClick.bind(this);
        }

    ```

4. Also, Preferred method for event binding - 
Using arrow functions to create the event handler

    ```
        onEventHandle = () => {
                this.setState({
                    message:"Event Handled!!"
                }, () => {
                    alert(this.state.message)
                })
            }
    ```


### Passing Methods as props

- Method defined in the parent method is triggered by the child and some parameters are passed along with it.
- Arrow function to pass arguments to the function i.e a parent method called in child.

    `<ChildComp greetHandler = {this.greetParent} >First Child</ChildComp>`
    greetHandler is the method prop passed to the child from parent

    ```
        constructor (props) {
            super (props)

            this.state = {
                message: 'Hello Parent, This is Me, '
            }

            this.greetParent = this.greetParent.bind(this)
        }

        greetParent (name) {
            alert(`${this.state.message}` + name)    
        }
    ```
    this.greetParent defined in the parent component and passed to child to trigger

    `<button onClick={()=>props.greetHandler(props.children)}> Greet Parent </button>`

