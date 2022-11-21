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
    --> `--yes` automatically responds yes to all promp questiions.

- Install `redux-toolkit` as a dependency and the setup is complete.

#### Folder Structure

- `App` folder generally contains all of the application code.
- `Features` folder contains all the code related to `redux-toolkit`
  - `store.js` contains the store which whole state of the application.
  - Separate folders for holding each feature - `cake`, `icecream`.
  - **It is recommended to group together the actions logice, reducers and the initail states in single file, and that file should have suffix as `Slice.js`**

- The whole state of the application is split into **slices** and managed individually.

#### Redux Toolkit setup - Actions, States, Reducers

- For `redux` setup, we need to perform following steps: 
    1. List down all the action types in `ActionTypes.js`
    2. Define all the action creators in the `Actions.js`
    3. Define the initial state, Reducer for the feature in `Reducer.js`
    4. Create a store and attach the middlewares and reducers to the store in `store.js`
    5. Attach/Subscribe the application to the store for further use!

- Let's see what setup needs to be done for `Redux-Toolkit` - 
    1. Create a file with the suffex `Slice.js` containing initialState, reducer, actions, almost everything.
       - 