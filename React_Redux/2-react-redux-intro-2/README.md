### Using Redux with React

#### Project setup

- Create a react application using the `npx create-react-app app_name` command
- Install `redux` and `react-redux` libraries using `npm install redux react-redux`

#### Setting up Actions, Reducers, Store

- Folder structure is maintained as **diffrent folder** for each action.

- so for our example, in `cake` directory, - 
  - [cakeTypes.js](./src/redux/cakes/cakeTypes.js) maintains the action types.
  - [cakeActions.js](./src/redux/cakes/cakeActions.js) maintains all the action creator functions.
  - [cakeReducers.js](./src/redux/cakes/cakeReducers.js) maintains all the reducers.
  - [store.js](./src/redux/cakes/store.js) contains the store for toring all teh states of the application.

- `store` is declared same as the for the normal JS application.

#### Connecting the application to the store

- **For connecting our application to the store**, we use `<Provider />` tag that is exposed by the `react-redux` library and envelope our whole application with the tag while passing `store={store}` prop to the tag.

    ```
    <Provider store={store}>
      <div className="App">
        <CakesCounter />
      </div>
    </Provider>
    ```

- In React-Redux official documentation, there is a file that is maintained and it contains functions called as `Selectors`. **These are the functions that selects specific part of store data and send us back.** 
  
    - Mostly used in large application. Also base concept for a hook called `useSelector()` - just FYI

- `connect()` HOC is used to connect store to the component. It takes two fucntions are argument and return store mapped to prop of the component.
  
  - ```
    const mapStateToProps = (state) => {
        return {
            numOfCakes: state.numOfCakes
        }
    }
    ```

  - ```
    const mapDispatchToProps = (dispatch) => {
        return {
            buyCake: () => dispatch(buyCake())
        }
    }
    ```   

  - ```
    import { connect } from 'react-redux/es/exports'

    export default connect(
    mapStateToProps,
    mapDispatchToProps)(CakesCounter);
    ``` 

- React redux v7.1 offers hooks instead of `connect()` HOC for subscribing to the store and dispathcing the actions.
- ***<.../ go throught the warnings in react redux docs abt using react redux with hooks\...>***
- refer the icecreams docs for hooks implementation