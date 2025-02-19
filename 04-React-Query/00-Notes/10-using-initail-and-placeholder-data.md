## Using initialData and placeholderData in TanStack Query

- When fetching data in React applications using TanStack Query (React Query), there can be scenarios where we want to pre-fill or display temporary data while the actual data is being fetched.

- React Query provides two options for this:
    - `initialData` →  Prefills data before fetching (useful for caching).
    - `placeholderData` → Temporarily displays fake/mock data while fetching.

### initialData: Pre-Filled Data from Cache or Static Values

- The initialData option allows you to set default data for the query before the actual fetch completes. This is useful when:
    - You have previously fetched data stored in cache.
    - You want to provide an instant response based on stored data.

#### Example: Prefilling User Data from Cache

    ```jsx
    import { useQuery } from "@tanstack/react-query";

    const fetchUserProfile = async () => {
    const res = await fetch("https://api.example.com/user/1");
    return res.json();
    };

    const UserProfile = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["userProfile", 1], 
        queryFn: fetchUserProfile, 
        initialData: {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
        }
    });

    if (isLoading) return <h2>Loading...</h2>;

    return (
        <div>
        <h2>User Profile</h2>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        </div>
    );
    };

    export default UserProfile;
    ```

#### How It Works?

- Initially, `initialData` is shown (John Doe is displayed instantly).
- Once the actual API fetch completes, it replaces the initial data with the real response.
- If the response matches `initialData`, the UI won’t re-render.

#### When to Use initialData?

- When you already have data stored in cache.
- When you want to avoid a loading state for previously fetched data.
- When the data doesn’t change frequently (like user profile info).

### Using initialData with queryClient

- Sometimes, you may want to fetch data once and then use it later as `initialData` in another query.

#### Storing Data in Query Client

```jsx
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchUserProfile = async () => {
  const res = await fetch("https://api.example.com/user/1");
  return res.json();
};

const UserProfile = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["userProfile"], 
    queryFn: fetchUserProfile, 
    initialData: () => queryClient.getQueryData(["userProfile"]) || null
  });

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {data?.name || "Unknown"}</p>
      <p>Email: {data?.email || "Unknown"}</p>
    </div>
  );
};

export default UserProfile;
```

#### Explanation

- Uses queryClient.getQueryData(["userProfile"]) to check if the data already exists in cache.
- If found, it prefills the UI instantly instead of showing a loading state.
- If not found, it fetches the data normally.

### placeholderData: Temporary Fake Data Before Fetch Completes

- The placeholderData option displays temporary/mock data until the real data is loaded.
- Unlike initialData:
    - placeholderData is not persisted; it disappears when real data arrives.
    - It is ideal for skeleton states or loading placeholders.

#### Example: Using placeholderData for Product List

```jsx
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const res = await fetch("https://api.example.com/products");
  return res.json();
};

const ProductList = () => {
  const { data, isFetching } = useQuery(
    ["products"],
    fetchProducts,
    {
      placeholderData: [
        { id: 1, name: "Loading Product...", price: "..." },
        { id: 2, name: "Loading Product...", price: "..." }
      ]
    }
  );

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      {isFetching && <p>Fetching updated products...</p>}
    </div>
  );
};

export default ProductList;
```

#### Explanation

- While the real API call is in progress, placeholderData is displayed.
- Once the API fetches actual products, the temporary data is replaced.
- It helps in avoiding flickering UI issues.

#### When to Use placeholderData?

- When you need a temporary skeleton UI while fetching data.
- When fetching lists of data (e.g., products, users, posts).
- When you want a smoother user experience without flickering.

### Key Differences Between initialData and placeholderData

| Feature | initialData | placeholderData |
| ------- | ----------- | --------------- |
| Purpose | Prefill cached or known data before fetching | Display temporary/mock data before fetching |
| Data Source | Usually comes from cache or pre-set values | Fake data (not cached) |
| Persisted? | Yes (stays unless replaced) | No (disappears when real data arrives) |
| Used in | Profiles, settings, non-changing data | Lists, tables, loading states | 
| Example Use Case | Prefilling user profile info | Showing "Loading Product..." text in a product list |

### Final Summary

| Feature | initialData | placeholderData |
| ------- | ----------- | --------------- |
| Used for | Prefilled data from cache or pre-set values | Temporary mock data before fetching |
| Data Persistence | Stored until replaced | Disappears when real data arrives |
| Avoids Loading State | Yes | Yes |
| Use Case | User profiles, settings, single records | Lists, tables, skeleton UI |