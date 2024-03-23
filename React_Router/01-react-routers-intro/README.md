### React Router

- Fully featured client and server side routing library for React
- Helps in navigating between different URLs that makes up the application in the web.
- Helps in creating separate URLs for the components that makes the UI easily shareable with other users. (like a UI screen with different filters applied. Eg An items on E-commerce website)

#### Setting up for using routers

> npm insatll react-router-dom@6   ---> for version 6, skip it for latest

- **Main and most lucurative feature that I found was - it literally creates a URL for any component in our project.**

#### Router Implementation

- Simple steps for setting up the routes for the project - 
    1. Make sure you have `router` library installed in the project directory.
    2. Firstly, wrap your application in `<BrowserRouter>` component where all the `<Routes>` will be rendered in.
        ```
        import { BrowserRouter } from "react-router-dom";

		<BrowserRouter>
            <App />
        </BrowserRouter>
        ```
    3. Use `<Routes>` to wrap all your `<Route>`s.
        ```
        <Routes>
			
			//can be self-closing 
	        <Route path='/' element = {<Home/>} />
	        
	        //Can be this way
	        <Route path='/signup' element = {<SignUpFrag/>} ></Route>
	        <Route path='/login' element = {<LogInFrag/>} />
	    </Routes>
        ```
    4. Find quick info on all the usefuls tags below ;)

- `<nav>` bar is good ol' html tag for containing all the links for navigation or tabs.

- `<NavLink>` - Generall, It is considered better UI to highlight the currently active tab, link to the user, where `NavLink` shines precisely. A extra class `active` is added to the link which is currently active using `<NavLink>` tag.

    - Custom css class can be used to add further styling such as - 
        ```
        a.active {
            text-decoration : none;
            font-weight: bold;
        }
        ```

    - Or, styles can be added using JS functions, in which case a `isActive` attribute is passed by default by the `NavLink` component.
        ```
        const fnNavStyles = ({isActive}) => {
            return {
                textDecoration : isActive ? none : 'underline',
                fontWeight : isActive ? 'bolder' : 'light'
            }
        }
        ```

    - `NavLink` is generally used in NavBar, BreadCrumbs, list of topics, etc. Wheras `Link` is used in inline toolbar, general redirect links, etc. 

    - also, has a `to=` prop to specify the path of the component to navigate to.

- `<Link>` compoennt from `react-router-dom` renders an anchor tag for us. Instead of `href=` of anchor tag, in `Link` has `to=` where the path to be navigated is specified.

#### Relative and Absolute links

- Links that start with '/' are called absolute links. Here, the absolute path is mentioned from the root directory of the project.

- Links that don't start with '/' are called relative links. They take the closest path and navigate accordingly or "relatively" to that path.