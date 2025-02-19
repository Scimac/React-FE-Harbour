## About Data Fetching - React Query 

### Traditional data fetch using useEffect

- Traditionally, we use `useEffect` to fetch data with empty dependency ('[]') array.
- This method induces a lot of boiler-plate code in the codebase. 
    ```jsx
    const [isLoading, setIsLoading] = useState(true)
        const [data, setData] = useState([])

        useEffect(() => {
            axios.get('http://localhost:4000/superheroes').then(res => {
                setData(res.data)
                setIsLoading(false)
            })
        }, [])
    ```
- Each mount of the component causes refetching of data. Causing decrease in performance.

### React Query - Data fetch and additional parameters

- `TanStack Query` (formerly known as React Query) is a powerful data-fetching and state management library designed to handle asynchronous server-state in modern web applications. 
- It provides tools for data fetching, caching, synchronization, and updating, enabling developers to build robust applications with ease.
- Read the [documentation](https://tanstack.com/query/latest/docs/framework/react/guides) for clear understanding.

#### Installation

- Install the core TanStack Query library for your chosen framework. For React:
    ```bash
    npm install @tanstack/react-query
    ```

- Additionally, install the optional Devtools package for debugging:
    ```bash
    npm install @tanstack/react-query-devtools
    ```

#### Setting Up TanStack Query

- **Initialize a QueryClient** - The `QueryClient` is the central instance responsible for managing queries and mutations.

- **Provide the QueryClient to Your Application**- Use the `QueryClientProvider` to make the `QueryClient` available to your components.

    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
    import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

    // Create a QueryClient instance
    const queryClient = new QueryClient();

    ...
        <QueryClientProvider client={queryClient}>
            <App />
            {/* Devtools for debugging */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    ...
    ```

- **Use useQuery Hook for fetching the data** - `useQuery` hook is used to fethc the data using RQuery. [useQuery](https://tanstack.com/query/latest/docs/framework/react/reference/useQuery). Different setting can be done to control the data fetch behaviour.

    ```jsx
    import { useQuery } from '@tanstack/react-query';

    function Todos() {
        const { data: todos, isLoading, error } = useQuery(['todos'], async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            if (!res.ok) throw new Error('Failed to fetch data');
            return res.json();
        });

        if (isLoading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;

        return (
            <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
            </ul>
        );
    }

    export default Todos;
    ```

