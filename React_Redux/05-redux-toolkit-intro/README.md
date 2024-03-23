### Redux Toolkit

- Redux Toolkit is **first official, opinionated, batteries-included toolset** for efficient react development.
- Try to make this the standard way of writing redux logic. Redux-Toolkit like Redux is not depended on React for use, it is useful for all JS projects.

#### Why it is needed?

- Redux has some shortcomings like - 
  - Configuring redux is painful with too much files to manage.
  - Many packages needs to be installed for it to work.
  - Elaborate boiler plate code.
    - Actions
    - Action Creators
    - Reducers
    - Initial States!!

- Redux Toolkit adds an abstraction layer on top of redux for providing good developer experience.
- **BUT!!!.... It is necessary to learn `Bare Redux` to have a peek inside the hood incase we run into a problem.**

#### Redux Toolkit is opinionated

- Requirements : `node` and `npm` must be installed in your system.
- In the project folder directory run command, `npm init --yes`    
    --> `--yes` automatically responds yes to all prompt questions.

- Install `redux-toolkit` as a dependency and the setup is complete.

#### Folder Structure

- `App` folder generally contains all of the application code.
- `Features` folder contains all the code related to `redux-toolkit`
  - `store.js` contains the store which whole state of the application.
  - Separate folders for holding each feature - `cake`, `icecream`.
  - **It is recommended to group together the actions logics, reducers and the initial states in single file, and that file should have suffix as `Slice.js`**

- The whole state of the application is split into **slices** and managed individually.

#### Redux Toolkit setup - Actions, States, Reducers

- For `redux` setup, we need to perform following steps: 
    1. List down all the action types in `ActionTypes.js`
    2. Define all the action creators in the `Actions.js`
    3. Define the initial state, Reducer for the feature in `Reducer.js`
    4. Create a store and attach the middlewares and reducers to the store in `store.js`
    5. Attach/Subscribe the application to the store for further use!

- Let's see what setup needs to be done for `Redux-Toolkit` - 
    1. Create a file with the suffix `Slice.js` containing initialState, reducer, actions, almost everything.
       - import the `createSlice()` method from `@redux/toolkit`
       - Declare and initialize the `initialState` state object
       - Create a slice function that **will generate action creators and reducers for the app**
          ```
          const slice = createSlice({
                                name : "sliceName",
                                initialState : initialState,
                                reducers : {
                                    reducer1 : (state) => {
                                        state.attribute -- ;
                                    },
                                    reducer2 : (state, action) => {
                                        state.attribute += action.payload
                                    }
                                }
                            });
          ```
       - Export actions and reducers from the **Slice object**.
          ```          
          // default export
          module.exports = slice.reducer;

          // named export
          module.exports.sliceActions = slice.actions;
          ```
    2. Create a store and attach the middlewares and reducers to the store in `store.js`
    3. Attach/Subscribe the application to the store for further use!

#### Extra Reducers

- The action that is dispatched is received by all the reducers in the application. Only the ones which have them as a case will react to the dispatch. Rest will ignore it.

- In redux, we have unique name for each action, therefore we can include it in different reducers and perform actions on different features in same app.

- But in redux toolkit, action name is dynamically formed as - `{reducer name} / {reducer func name}`, therefore it needs to be included in different reducers.

```

    // For reducing one ice cream for each cake bought
    
    extraReducers : {
        ['cake/ordered'] : (state) => {
            state.numOfIcecreams -= 1
        }
    }

    OR
    
    // this get a extra builder function to add new cases to the reducer
    extraReducers : (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecreams -= 1
        });
    }
```

#### Asynchronous Redux 

- 