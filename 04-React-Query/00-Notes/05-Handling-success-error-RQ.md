## Handling Success and Error block

- In React Query, you can handle success and error states within the `useQuery` hook using the `onSuccess`, `onError`, and `onSettled` callbacks. 
- These callbacks allow you to run specific logic when a query is successfully fetched, when it fails, or when it finishes regardless of success or failure.

### Handling Callbacks

1. **onSuccess Callback**
- Triggered when the query successfully fetches data.
- You can use this to perform actions like updating the UI, triggering side effects, or storing the fetched data.

2. **onError Callback**
- Triggered if the query fails (e.g., network error, server error).
- Use this to handle errors, show error messages, or perform cleanup actions.

3. **onSettled Callback**
- Triggered once the query has finished, whether it was successful or not.
- Useful for resetting states or performing common actions (e.g., invalidating queries, refetching data).

### Example

```jsx
    import { useQuery } from '@tanstack/react-query';

    const fetchData = async () => {
        const response = await fetch('/api/data');
        if (!response.ok) throw new Error('Failed to fetch data');
        
        return response.json();
    };

    const MyComponent = () => {
        const { data, error, isLoading, isError } = useQuery(
            {
                queryKey: ['data'],
                queryFn: fetchData,
                onSuccess: (data) => {
                    // Action to take on success
                    console.log('Data fetched successfully:', data);
                },
                onError: (error) => {
                    // Action to take on error
                    console.error('Error fetching data:', error.message);
                },
                onSettled: () => {
                    // Action to take when the query is done (whether success or failure)
                    console.log('Query has settled');
                },
            }
        );

        if (isLoading) return <div>Loading...</div>;
        if (isError) return <div>Error: {error.message}</div>;

        return (
            <div>
                <h1>Data:</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        );
    };

    export default MyComponent;

```

### Using isLoading and isError Flags:

- You can also use `isLoading`, `isError`, and other status flags directly in the component to show UI states based on the query status:

- `isLoading`: Indicates the query is in a loading state.
- `isError`: Indicates the query encountered an error.
- `data`: Contains the fetched data once the query is successful.