## Fetching Data by ID using React Query

### Basic Example: Fetching Data by ID

```jsx
import { useQuery } from "@tanstack/react-query";

const fetchHeroById = async (id) => {
  const response = await fetch(`https://api.example.com/superheroes/${id}`);
  if (!response.ok) throw new Error("Hero not found");
  return response.json();
};

const useSuperHeroData = (heroId) => {
  return useQuery(["superhero", heroId], () => fetchHeroById(heroId), {
    enabled: !!heroId, // Prevents query from running if heroId is undefined/null
  });
};

const SuperHeroDetail = ({ heroId }) => {
  const { data, isLoading, isError, error } = useSuperHeroData(heroId);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Power: {data.power}</p>
    </div>
  );
};

export default SuperHeroDetail;
```

#### Explanation of Key Concepts

- `queryKey` Structure:
- The query key is `["superhero", heroId]`, which uniquely identifies each query.
- If the `heroId` changes, React Query will refetch the corresponding data.

- `enabled` Option:
- `enabled: !!heroId` ensures that the query only runs when a valid `heroId` is provided.
- Prevents unnecessary API calls when heroId is `undefined` or `null`.

### Fetching Data on User Input (Dynamic ID)

- If the hero ID is user-selected (e.g., from a dropdown or button), we can fetch data dynamically.

```jsx
import { useState } from "react";
import SuperHeroDetail from "./SuperHeroDetail";

const SuperHeroPage = () => {
  const [heroId, setHeroId] = useState(null);

  return (
    <div>
      <h2>Select a Superhero</h2>
      <button onClick={() => setHeroId(1)}>Fetch Batman</button>
      <button onClick={() => setHeroId(2)}>Fetch Superman</button>

      {heroId && <SuperHeroDetail heroId={heroId} />}
    </div>
  );
};

export default SuperHeroPage;
```
#### Behavior:

- Clicking a button sets the heroId, triggering useQuery to fetch the corresponding superhero.
- The component only fetches data when an ID is selected.

### Using select to Transform the Data

```jsx
const useSuperHeroData = (heroId) => {
  return useQuery(
    ["superhero", heroId],
    () => fetchHeroById(heroId),
    {
      enabled: !!heroId,
      select: (data) => ({ name: data.name, power: data.power }), // Extract only necessary fields
    }
  );
};
```

### Handling Refetching & Caching

#### Manual Refetch

- To manually refetch the data, use the refetch function:

```jsx
const { data, refetch } = useSuperHeroData(heroId);
<button onClick={() => refetch()}>Refetch Hero</button>;
```

#### Cache Expiration (staleTime)

- By default, React Query caches fetched data. You can control how stale the data is before refetching:

```jsx
useQuery(["superhero", heroId], () => fetchHeroById(heroId), {
  staleTime: 5 * 60 * 1000, // Cache remains fresh for 5 minutes
});
```

### Optimizing Performance with Prefetching

- If you know the user might request adjacent data, you can prefetch it before they need it:

```jsx
import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

const prefetchHero = (heroId) => {
  queryClient.prefetchQuery(["superhero", heroId], () => fetchHeroById(heroId));
};
```

Then, call `prefetchHero(heroId)` when hovering over a button to preload the data.

### Conclusion

- Fetching by ID in React Query is efficient and optimized.
- Using queryKey, enabled, and select ensures controlled data fetching.
- Features like manual refetching, caching, and prefetching improve performance.