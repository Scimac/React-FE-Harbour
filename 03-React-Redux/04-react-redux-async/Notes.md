## Redux Thunk Middleware

- Redux Thunk is a middleware that allows you to write action creators that return functions instead of plain objects. 
- This is particularly useful for handling asynchronous logic in Redux actions. 
- Here's why Redux Thunk is needed for handling async actions -

1. **Action Creators Can Return Functions:**
   - Normally, action creators in Redux return plain action objects with a `type` property. 
   - However, Redux Thunk allows action creators to return functions, giving you the ability to perform asynchronous operations inside those functions.

2. **Access to Dispatch and getState:**
   - Functions returned by Redux Thunk receive `dispatch` and `getState` as arguments. 
   - This allows you to dispatch additional actions or access the current state of the Redux store within your async logic.

3. **Asynchronous Operations:**
   - Many operations in web applications are asynchronous, such as making API calls, fetching data from a server, or handling timers. 
   - With Redux Thunk, you can dispatch actions at different points during the asynchronous operation, such as when the operation starts, succeeds, or fails.

4. **Simplify Asynchronous Code:**
   - Using Redux Thunk can help simplify asynchronous code in your Redux actions. 
   - You can encapsulate complex async logic within action creators, keeping your components lean and focused on presentation logic.

5. **Seamless Integration with Redux:**
   - Redux Thunk seamlessly integrates with Redux, allowing you to use it alongside other Redux features like reducers, selectors, and the Redux DevTools Extension. 
   - It's a widely used middleware in the Redux ecosystem and has strong community support.

Overall, Redux Thunk provides a convenient way to handle asynchronous actions in Redux applications, enabling you to write clean, maintainable, and predictable code for managing state and side effects.

> Another middleware to use instead of Thunk is **SAGA** Middleware.

## Implementation of Async Thunk 

### Step 1: Install Redux Thunk
If you haven't already installed Redux Thunk, you can do so using npm or yarn:

```bash
npm install redux-thunk
```

### Step 2: Configure Redux Thunk Middleware
In your Redux store configuration, apply Redux Thunk middleware:

```javascript
// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
```

### Step 3: Define Async Action Creators
- Create action creators that return functions instead of plain action objects. 
- These functions can dispatch multiple actions and perform async operations before dispatching the final action.

```javascript
// actions.js
export const fetchPostsRequest = () => ({
  type: 'FETCH_POSTS_REQUEST'
});

export const fetchPostsSuccess = (posts) => ({
  type: 'FETCH_POSTS_SUCCESS',
  payload: posts
});

export const fetchPostsFailure = (error) => ({
  type: 'FETCH_POSTS_FAILURE',
  payload: error
});

// Returns a function which has access to dispatch and getState
export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch(fetchPostsSuccess(data));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};
```

### Step 4: Dispatch Async Actions from Components
- Dispatch the async actions from your React components. 
- You can use `useDispatch` hook to access the `dispatch` function.

```javascript
// PostsList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions';

function PostsList() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
```

### Step 5: Handle Async State in Reducers
Update your reducers to handle the loading, success, and failure states of the async operation.

```javascript
// reducers.js
const initialState = {
  posts: [],
  loading: false,
  error: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, posts: action.payload, loading: false };
    case 'FETCH_POSTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
```