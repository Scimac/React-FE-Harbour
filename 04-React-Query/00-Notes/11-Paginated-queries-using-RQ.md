## Paginated Queries in TanStack Query (React Query)

- Pagination is a technique where data is fetched in chunks rather than retrieving everything at once. This improves performance and reduces API load.
- TanStack Query makes pagination easy by providing **query keys** and **state management** for handling paginated API requests efficiently.

### Basic Concept of Pagination

- There are two main ways APIs handle pagination:
    - **Offset-Based Pagination** → Uses page numbers (e.g., ?page=1).
    - **Cursor-Based Pagination** → Uses nextPageToken or `cursor` for the next batch.

- TanStack Query supports both methods seamlessly.

### Implementing Offset-Based Pagination (?page=1)

#### API details

- Assume we have an API endpoint: `https://api.example.com/products?page=1`
- data returned from the API -- 
    ```jsx
    {
        "products": [
            { "id": 1, "name": "Product A" },
            { "id": 2, "name": "Product B" }
        ],
        "totalPages": 5
    }
    ```

#### React Query Implementation

```jsx
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (page) => {
  const res = await fetch(`https://api.example.com/products?page=${page}`);
  return res.json();
};

const PaginatedProducts = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery(
    ["products", page], // Query Key includes page number
    () => fetchProducts(page), 
    {
      keepPreviousData: true, // Keeps old data while fetching new page
    }
  );

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;

  return (
    <div>
      <h2>Paginated Products</h2>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
        Previous
      </button>
      <button disabled={page === data.totalPages} onClick={() => setPage((p) => p + 1)}>
        Next
      </button>
    </div>
  );
};

export default PaginatedProducts;
```

#### Important learnings

- `["products", page]` → Query key includes page for caching different pages separately.
- `keepPreviousData: true` → **Prevents flickering when switching pages**.
- Page state (`useState`) → Allows navigation between pages.

### Implementing Cursor-Based Pagination (cursor=123)

#### API details

- Assume we have an API endpoint: `https://api.example.com/products?cursor=`
- data returned from the API -- 
    ```jsx
    {
        "products": [
            { "id": 1, "name": "Product A" },
            { "id": 2, "name": "Product B" }
        ],
        "nextCursor": "abc123"
    }
    ```
- Instead of `?page=2`, the next request would be `?cursor=abc123`.

#### React Query Implementation - useInfiniteQuery

```jsx
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchProducts = async ({ pageParam = null }) => {
  const res = await fetch(
    `https://api.example.com/products?cursor=${pageParam || ""}`
  );
  return res.json();
};

const InfiniteProducts = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["products"],
    fetchProducts,
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor || undefined, // Get next cursor
    }
  );

  return (
    <div>
      <h2>Infinite Scrolling Products</h2>
      <ul>
        {data?.pages.map((page, i) => (
          <div key={i}>
            {page.products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </div>
        ))}
      </ul>

      <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default InfiniteProducts;
```

#### Important Learnings

- `useInfiniteQuery` → Used for cursor-based pagination.
- `getNextPageParam` → Retrieves the next cursor dynamically.
- `fetchNextPage()` → Fetches more data on button click.
- `data.pages.map()` → Combines multiple pages in the UI.

### Key Differences: Offset vs Cursor Pagination

| Feature | Offset Pagination (?page=1) | Cursor Pagination (?cursor=abc123) |
| ------- | ------- | ------- |
| Query Hook | useQuery | useInfiniteQuery |
| Parameter | page=1,2,3 | cursor=abc123 |
| Ideal For | Fixed-size pages | Infinite scrolling |
| Caching Strategy | Each page stored separately | Fetched data is appended |

### Optimizing Performance with prefetchQuery

- We can prefetch and cache the data for such implemntations. (**Prefetch** can be done in any type of RQ implementations.)

```jsx
import { useQuery, useQueryClient } from "@tanstack/react-query";

const PaginatedProducts = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const { data } = useQuery(["products", page], () => fetchProducts(page), {
    keepPreviousData: true,
    onSuccess: (data) => {
      if (page < data.totalPages) {
        queryClient.prefetchQuery(["products", page + 1], () => fetchProducts(page + 1));
      }
    },
  });

  return (
    <div>
      <h2>Prefetched Paginated Products</h2>
      <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
        Previous
      </button>
      <button onClick={() => setPage((p) => p + 1)}>
        Next (Prefetched)
      </button>
    </div>
  );
};
```

- **Benefits of prefetch** - 
    - Preloads the next page when the current page loads.
    - Improves perceived speed by reducing wait times.

## Summary of Best Practices

- Use `keepPreviousData`: true to avoid UI flickering.
- Use `useInfiniteQuery` for infinite scrolling.
- Use `prefetchQuery` to preload next pages for smooth navigation.
- Store paginated queries in query keys (["products", page]).
- Optimize API calls (e.g., limit data per page to avoid large payloads).