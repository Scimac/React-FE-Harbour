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