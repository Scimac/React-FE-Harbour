## Conditional Rendering

Contolling the visibility of the objects based on certain conditions. This can be achieved in 4 ways - 

1. if/else statements
    ```
    if (this.state.isLoggedIn) {
        return (<div> Welcome Guest Name </div>)
    } else {
        return (<div>Welcome User!</div>)
    }
    ```

2. Element Variable 
    ```
    let message = ''

    if (this.state.isLoggedIn) {
        message = 'Welcome Guest Name';
    } else {
        message = 'Welcome User!';
    }

    return <div>{message}</div>
    ```

3. Ternary operator
    ````
    this.state.isLoggedIn ? <div> Welcome Guest Name </div> : <div>Welcome User!</div>
    ```

4. Short Circuiting
    ```
    this.state.isLoggedIn && <div> Welcome Guest Name </div>
    ```

### Rendering a list

Basically we need to loop through the data and return required markdown format.

The Array.prototype.map() function is used for the following purpose - 
    ```
        const numbers = [1, 2, 3, 4];
        const filteredNumbers = numbers.map((num, index) => {
            if (index < 3) {
                return num;
            }
        });
    ```
- map always need the arrow function to return something.

- E.g look at this render method of the class to return the data in repeated format.
    ```
    render () {
        let personas = this.state.persons.map(person=>(
            <h3>
                Hi! This is {person.name}, specializes in {person.specialization} and works for {person.job}
            </h3>
        ));

        return (
            <div>
                {personas}
            </div>
        )
    }
    ```

- Let's separate each function into two parts - [check code](link code here)

    1. Parent (`<LooperComp>`) - looper that will take care of creating the list.
    2. Child (`<RenderedComp>`) - Component that will return the jsx that needs to be looped/repeated.

- A “key” is a special string attribute you need to include when creating lists of elementsand helps React identify which items have changed, are added, or are removed while refreshing the DOM tree.

So, instead of recreating the whole DOM tree again and again, React only updates the DOM tree making process efficient.

- `key="data"` is passed in as a prop in the child while mapping but cannot be accessed by the child from `props`. If we need to access `data`, we need to pass it as a different prop.

- ### Important!!

    - We can use index as key - [check code for renderingType]()
    - But it may cause some issue when the list is updated and key for each element is refreshed !!!
    // insert reorder pic

    - For using index make sure that the list is never reordered or create a unique key using index hashs
    
