> This project shows a worked out example for - Comparision code between Data Fetch using useEffect and React Query.

## Boilerplate Setup for React Query and React Query Devtools

- To use React Query effectively in your React project, you need to set up the `QueryClient` and `QueryClientProvider`. 
- Additionally, integrating React Query Devtools helps you debug queries effortlessly.

### Steps to Set Up React Query

#### 1. Install Dependencies

- To get started, install React Query and React Query Devtools using npm or yarn:

```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
 // or
yarn add @tanstack/react-query @tanstack/react-query-devtools
```

#### 2. Create a QueryClient

- The `QueryClient` is the core object in React Query that manages the caching and fetching of data. 
- Initialize it in your app's entry point (e.g., `index.js` or `App.js`).

> In MicroFE setup, we can link two apps/modules by providing same `QueryClient` for creating update or refetch side-effect.

##### Example Boilerplate Code

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';

// Create a QueryClient instance
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provide the QueryClient to your application */}
    <QueryClientProvider client={queryClient}>
      <App />
      {/* Add React Query Devtools for debugging */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
```

#### 3. Using React Query in Your Application

You can now use React Query hooks like `useQuery` and `useMutation` in your components to fetch, cache, and synchronize server-state.

##### Example: Fetching Data with `useQuery`

```jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

function Posts() {
  const { data, isLoading, error } = useQuery(['posts'], async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
```

#### 4. React Query Devtools

React Query Devtools provide a user-friendly interface for inspecting and debugging your queries. The `ReactQueryDevtools` component can be configured with additional props:

- **Props for ReactQueryDevtools**
- `initialIsOpen`: Determines if the devtools are open by default.
- `position`: Sets the position of the devtools (`'bottom-left'`, `'bottom-right'`, `'top-left'`, `'top-right'`).

- **Example:**

```jsx
<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
```

- With this boilerplate, you are ready to harness the power of React Query for efficient server-state management.