## React Query Tools

- **React Query DevTools** is a powerful set of tools that helps you interact with, debug, and inspect the state of your queries and mutations in a React application. 

### Key Features of React Query DevTools:

1. **Query & Mutation Inspection**: See all the queries and mutations running in your app in real-time, Inspect their status, data, and metadata. View detailed logs of previous fetches, including errors or retries.

2. **Cache Data Inspection**: Inspect the cache for each query and see the cached data for different query keys. Modify or delete cached data for testing purposes.

3. **Query Status**: Check the loading, error, and success states of queries and mutations. Monitor active queries and identify any failed or pending ones.

4. **Query Details**: View specific details like - 
    - Query Key: The unique key used to identify the query.
    - Stale Time & Cache Time: View the times set for data freshness.
    - Retry Attempts: Information about how many retry attempts have been made and the retry delay.
    - Data: The actual data returned from the query.
    - Error: Any error messages if the query fails.

5. **Refetching**: Manually trigger a refetch of queries from the DevTools interface. Allows you to simulate re-fetching behavior during development without needing to reload components.

6. **Prefetching**: View prefetching states, including any queries that are preloaded into the cache for later use.

7. **Pagination & Filters**: Works well with queries that are paginated or have filters. You can see query parameters and navigate between pages of data.

### Integration:

- You need to wrap your app with `ReactQueryDevtools` component, typically inside your app’s root component.
        
    ```jsx
        import { QueryClient, QueryClientProvider, ReactQueryDevtools } from '@tanstack/react-query-devtools';

        const queryClient = new QueryClient();

        function App() {
            return (
                <QueryClientProvider client={queryClient}>
                <MyComponent />
                <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            );
        }
    ```

#### Key Props for ReactQueryDevtools:

- **initialIsOpen**: A boolean to control if the DevTools should open by default. Example: initialIsOpen={true}
- **position**: Defines where the DevTools appear on the screen. Can be top-right, top-left, bottom-right, or bottom-left.
- **toggleButtonProps**: Customization of the toggle button's appearance and behavior.
- **panelProps**: Allows you to style or modify the DevTools panel.