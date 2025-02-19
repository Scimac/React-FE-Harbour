## Dependent Queries in RQ

- Dependent queries in React Query allow one query to wait for another query’s data before executing. This is useful when fetching related data, such as:
    - Fetching a user’s details first, then using their id to fetch their orders.
    - Fetching a country, then using the country code to fetch weather data.

### Example : Fetching Orders After User Data

```jsx
import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
  const res = await fetch("https://api.example.com/user");
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};

const fetchOrders = async (userId) => {
  const res = await fetch(`https://api.example.com/orders/${userId}`);
  if (!res.ok) throw new Error("Failed to fetch orders");
  return res.json();
};

const DependentQueriesExample = () => {
  // First query: Fetch user details
  const { data: user, isLoading: userLoading } = useQuery(["user"], fetchUser);

  // Second query: Fetch orders only after userId is available
  const { data: orders, isLoading: ordersLoading } = useQuery({
        queryKey: ["orders", user?.id], // Query key depends on userId
        queryFn: () => fetchOrders(user.id), // Fetch orders using userId
        enabled: !!user?.id, // Ensures query runs only when userId is available
    });

  if (userLoading) return <h2>Loading user...</h2>;
  if (ordersLoading) return <h2>Loading orders...</h2>;

  return (
    <div>
      <h2>User: {user.name}</h2>
      <h3>Orders:</h3>
      <ul>
        {orders?.map((order) => (
          <li key={order.id}>{order.productName}</li>
        ))}
      </ul>
    </div>
  );
};

export default DependentQueriesExample;
```

### How it works?

- `useQuery(["user"], fetchUser)` → Fetches the user data first.
- `useQuery(["orders", user?.id], fetchOrders, { enabled: !!user?.id })` → Fetches orders only when the userId is available.
- `enabled: !!user?.id` ensures the second query does not run until `user.id` is defined.

### Handling Errors in Dependent Queries

- If the first query fails, the second query should not execute. 
- This happens automatically with enabled, but we can explicitly handle it:

```jsx
const { data: user, error: userError } = useQuery(["user"], fetchUser);

const { data: orders, error: ordersError } = useQuery({
  queryKey: ["orders", user?.id],
  queryFn: () => fetchOrders(user.id),
  enabled: !!user?.id 
  });

if (userError) return <h2>Error fetching user: {userError.message}</h2>;
if (ordersError) return <h2>Error fetching orders: {ordersError.message}</h2>;
```

### When to Use Dependent Queries?

| Scenario	| Solution |
| --------- | -------- |
| Fetching orders after fetching a user’s ID | Dependent Query |
| Fetching a city list after selecting a country | Dependent Query |
| Fetching data that doesn’t depend on another request | Parallel Queries (useQuery) |

## Conclusion

- Dependent Queries allow chained data fetching where one query depends on another.
- `enabled: !!data?.id` prevents premature API calls.
- Helps in fetching related resources efficiently (e.g., `User` → `Orders`, `Country` → `Cities`).