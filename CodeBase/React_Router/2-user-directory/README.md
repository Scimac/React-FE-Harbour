### Navigating programatically 

- Sometimes appliication needs to navigate from one page to another after completing certain actions, viz. Complete filling a form, clicking on a item in list for more information, etc.

#### UseNavigate() Hook

- `react-router-dom` provides `useNavigate()` hooks for fulfilling this requirement. `useNavigate()` returns a function that lets application navigate programatically.

    - `const navigate = useNavigate();`
            - (to="path for navigation",
                {replace="boolean whether to replace the path in BOM navigation history", state:any;})

    - E.g - 
        ```
        const navigate = useNavigate();
        <button style={{marginLeft : "1rem"}} onClick={() => navigate("/userInfo")}>Go to User</button>
        ```

    - Pass the delta you want to go in the history stack. For example, `navigate(-1)` is equivalent to hitting the back button.

- `useNavigate()` hook is better replaced by `redirect()` as per the [docs](https://reactrouter.com/en/main/hooks/use-navigate)

### NoMatch Route

- If the user enters an invalid url or any error occurs while forming the path for naivigation, User can be redirected to a common path showing **Path not found meesage**.

- `*` reppresents all the paths that are not present in the application and shows error message.
    
    `<Route path='*' element={<NoMatch />} />`

### Nested Routes

- The Nested routes help in **changing only a portion of the page**, rather than changin the whole page component. 

- For implementing the nested routes, follow the steps - 
    1. Change the `<Route>` tag to closing tag instead of self-closing tag.
    2. Add all the nested routes enclosed inside the `<Route></Route>` tags.
    3. **Make sure you use the realtive paths, instead of absolute paths**
        ```
        
        <Route path='/userInfo' element={<UserInfo />} >

          {/* Please mind that here I am using relative path not absolute path... Path the formed by React using the nesting*/}
          <Route path='personalInfo' element={<PersonalInfo />} />
          <Route path='employeeInfo' element={<EmployeeInfo />} />
          
        </Route>
        ```
    4. In the page where component needs to be changes, include `<Outlet />` component to mark the location where the changes need to be rendered.

#### Index Route

- While nesting the route, we might want to show one of the nested route as default or some other component as default in `<Outlet />` tag. This is achieved using `Indexed Route`.

- Follow similar process as nested routes, just instead of path, pass a `index` prop to the `<Route>` component.
    `<Route index element={<PersonalInfo />} />`

### URL Params and useParams() Hook

- Application needs to pass certain parameters while navigaton like selected data UID, Any item selected, etc. This can be done through URL params. They are pass in the route after `:`, as - 

    `<Route path='/userInfo/:userId/:isAdmin' element={<UserInfo />} />`

- To consume the URL Params, use `useParams()` hook which returns all the params as a object. The object can be destructured and used as - 

    `const { userId, isAdmin } = useParams()`

### Search Params and useSearchParams() Hook

- The `useSearchParams()` hook is used to read and modify the query string in the URL for the current location. 

- Like React's own `useState()` hook, `useSearchParams()` returns an array of two values: the current location's search params and a function that may be used to update them.

- Refer [`Home.jsx`](./src/components/Home.jsx) for implementation.



React Router is a popular library used for navigating between different pages in a React application. It provides a number of useful features for routing and navigation, including the useNavigate() hook, NoMatch Route, Nested Routes, Index Route, URL Params, and useSearchParams() hook.

useNavigate() Hook:

The useNavigate() hook provided by the react-router-dom library lets the application navigate programmatically by returning a function. The navigate function can be called with a path string and optionally, a replace boolean to replace the path in the BOM navigation history, and a state object. Here is an example:

```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
<button style={{marginLeft : "1rem"}} onClick={() => navigate("/userInfo")}>Go to User</button>
```

NoMatch Route:

In case the user enters an invalid URL or any error occurs while forming the path for navigation, the application can redirect the user to a common path showing a "Path not found" message. This can be achieved by using a NoMatch Route. The "*" character represents all the paths that are not present in the application and shows an error message. Here is an example:

```jsx
import { Route } from 'react-router-dom';

<Route path='*' element={<NoMatch />} />
```

Nested Routes:

Nested Routes help in changing only a portion of the page, rather than changing the whole page component. To implement nested routes, follow these steps:

- Change the Route tag to a closing tag instead of a self-closing tag.
- Add all the nested routes enclosed inside the Route tags.
- Use relative paths instead of absolute paths. Here is an example:

```jsx
import { Route, Outlet } from 'react-router-dom';

<Route path='/userInfo' element={<UserInfo />} >
  <Route path='personalInfo' element={<PersonalInfo />} />
  <Route path='employeeInfo' element={<EmployeeInfo />} />
</Route>

// In the page where component needs to be changes, include <Outlet /> component to mark the location where the changes need to be rendered.

function UserInfo() {
  return (
    <div>
      <h1>User Info</h1>
      <Outlet />
    </div>
  );
}
```

Index Route:

While nesting the route, we might want to show one of the nested routes as default or some other component as default in the Outlet tag. This can be achieved using an Index Route. Follow a similar process as nested routes, just instead of a path, pass an index prop to the Route component. Here is an example:

```jsx
import { Route } from 'react-router-dom';

<Route index element={<PersonalInfo />} />
```

URL Params and useParams() Hook
Application needs to pass certain parameters while navigation like selected data UID, Any item selected, etc. This can be done through URL params. They are passed in the route after `:` as follows:

```jsx
<Route path='/userInfo/:userId/:isAdmin' element={<UserInfo />} />
```

To consume the URL params, use the `useParams()` hook which returns all the params as an object. The object can be destructured and used as follows:

```jsx
import { useParams } from 'react-router-dom';

function UserInfo() {
  const { userId, isAdmin } = useParams();

  return (
    <div>
      <p>User ID: {userId}</p>
      <p>Is Admin: {isAdmin}</p>
    </div>
  );
}
```

Search Params and useSearchParams() Hook
The `useSearchParams()` hook is used to read and modify the query string in the URL for the current location. Like React's own `useState()` hook, `useSearchParams()` returns an array of two values: the current location's search params and a function that may be used to update them.

For example, consider the URL `http://localhost:3000/search?q=react&page=1`. Here, `q` and `page` are search params, and their values are `react` and `1`, respectively. To access these search params, we can use the `useSearchParams()` hook as follows:

```jsx
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.searchQuery.value;
    setSearchParams({ q: searchQuery, page: 1 });
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="searchQuery" />
        <button type="submit">Search</button>
      </form>
      <p>Search Query: {searchParams.get('q')}</p>
      <p>Page: {searchParams.get('page')}</p>
    </div>
  );
}
```

In the above example, we are using `setSearchParams()` to update the search params when the user submits a search query. We can also access the search params using the `get()` method of the `searchParams` object.

These are some of the common use cases and hooks in React Router that can be used to create a robust and scalable routing system for web applications. With these tools and techniques, developers can easily manage the navigation flow and handle user interactions without needing to refresh the page.