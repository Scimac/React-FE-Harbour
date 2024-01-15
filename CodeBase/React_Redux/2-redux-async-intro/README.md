### Asynchronous Redux

- Earlier, the cake and icream example was a kind of **Synchronous Actions**. The actions were getting dispatched and the state was updated immediately.

- Asynchronous actions have delay in between the `action dispatch` and `state update` processes. E.g Data Fetching.

#### Project setup

- `redux` is required as a dependency for creting and loading the store with user ids fetched from the APIs.
- `axios` for making API calls
- `redux-thunk` is a default way to `create async action creators` which can return functions as output while taking in `dispath()` as argument.

#### State in Async 

- State object generally has the following structure - 
    ```
    const state = {
        loading : false,
        data : [],
        error : ''
    }
    ```

#### Actions in Async

- FETCH_USERS_REQUEST 
- FETCH_USERS_SUCCESS 
- FETCH_USERS_ERROR

#### Reducers in Async

    ```
    case: FETCH_USERS_REQUEST 
        loading : true
    case: FETCH_USERS_SUCCESS
        loading : false
        data : users (From API) 
    case: FETCH_USERS_ERROR
        loading : false
        error : error (from API)
    ```