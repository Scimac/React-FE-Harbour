## Parallel and Dynamic Queries in RQ

- React Query (TanStack Query) allows fetching multiple independent queries in parallel to optimize data retrieval. 

### Manual Parallel Queries

- Parallel queries fetch multiple unrelated queries simultaneously without waiting for one another. 
- This reduces the overall loading time when multiple resources are required at once.

```jsx
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("https://api.example.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

const fetchPosts = async () => {
  const res = await fetch("https://api.example.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

const ParallelQueries = () => {
  const { data: users, isLoading: usersLoading } = useQuery(["users"], fetchUsers);
  const { data: posts, isLoading: postsLoading } = useQuery(["posts"], fetchPosts);

  if (usersLoading || postsLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Users</h2>
      {users?.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

      <h2>Posts</h2>
      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default ParallelQueries;
```

- **Explanation:**
    - Two independent queries (`users` and `posts`) are executed in parallel.
    - Each query has its own `loading` and `error` state.
    - The UI renders both lists simultaneously once the data is available.

- **Benefits:**
    - Improves performance by avoiding sequential API calls.
    - Reduces waiting time, especially when fetching independent datasets.
    - Prevents UI blocking—one request failing doesn’t affect the other.

> When using React Query in suspense mode, this pattern of parallelism does not work, since the first query would throw a promise internally and would suspend the component before the other queries run. To get around this, you'll either need to use the useSuspenseQueries hook (which is suggested) or orchestrate your own parallelism with separate components for each useSuspenseQuery instance. - From Tanstack RQ docs

### Dynamic Parallel Queries

- When the number of queries is unknown (e.g., fetching data for multiple IDs dynamically), dynamic parallel queries are useful.

- **Example: Fetching Superheroes by Multiple IDs**
    ```jsx
        import { useQueries } from "@tanstack/react-query";

        const fetchHeroById = async (id) => {
        const res = await fetch(`https://api.example.com/superheroes/${id}`);
        if (!res.ok) throw new Error("Hero not found");
            return res.json();
        };

        const DynamicParallelQueries = ({ heroIds }) => {
            const heroQueries = useQueries({
                queries: heroIds.map((id) => ({
                queryKey: ["superhero", id],
                queryFn: () => fetchHeroById(id),
                })),
            });

            if (heroQueries.some((query) => query.isLoading)) return <h2>Loading...</h2>;

            return (
                <div>
                    <h2>Superheroes</h2>
                    {heroQueries.map((query, index) =>
                        query.isError ? (
                        <p key={heroIds[index]}>Error fetching hero {heroIds[index]}</p>
                    ) : (
                        <p key={query.data.id}>{query.data.name}</p>
                        )
                    )}
                </div>
            );
        };

        export default DynamicParallelQueries;
    ```

- **Explanation:**
    - **`useQueries` Hook**: Fetches multiple queries dynamically based on the provided `heroIds`.
    - **Each Query is Executed in Parallel**: React Query fetches each hero’s data independently.
    - **Handles Loading & Errors**:
        - If any query is loading, it displays "Loading...".
        - If any query fails, it shows an error message for that specific hero.

- **Benefits:**
    - Handles multiple queries efficiently without manually calling useQuery multiple times.
    - Prevents unnecessary API calls by dynamically creating queries only for the needed items.
    - Improves user experience by allowing data to be displayed as it arrives.

### When to Use Parallel vs. Dynamic Parallel Queries?

| Scenario	| Solution |
| -------- | ------- |
| Fetching multiple independent queries (e.g., users & posts) |	Parallel Queries (useQuery) |
| Fetching multiple related queries dynamically (e.g., superheroes by IDs)	| Dynamic Parallel Queries (useQueries) |