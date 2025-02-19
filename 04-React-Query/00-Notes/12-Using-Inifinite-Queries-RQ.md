
# Infinite Queries in TanStack Query (React Query)  

## Overview

- Infinite queries in TanStack Query allow **dynamic, endless data fetching**—perfect for **infinite scrolling** or **"Load More"** functionalities. 
- Instead of paginating through numbered pages, infinite queries **append new data** to the existing list.  
- This is achieved using:  
    - `useInfiniteQuery` → React Query’s built-in hook for infinite loading.  
    - `fetchNextPage()` → Function to fetch additional data.  
    - `getNextPageParam()` → Defines how to retrieve the next batch of data.  

## When to Use Infinite Queries  

- **Infinite Scrolling:** Social feeds, chat applications, product listings.  
- **"Load More" Pagination:** Apps where users manually load more data.  
- **Cursor-Based APIs:** APIs that return a `nextCursor` instead of a page number.  

## Basic Infinite Query Example

- Assume an API returns paginated product data:
    ```json
    {
        "products": [
            { "id": 1, "name": "Product A" },
            { "id": 2, "name": "Product B" }
        ],
        "nextCursor": "xyz789"
    }
    ```

### Implementing Infinite Queries in React  

```js
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchProducts = async ({ pageParam = null }) => {
  const res = await fetch(
    `https://api.example.com/products?cursor=${pageParam || ""}`
  );
  return res.json();
};

const InfiniteProducts = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["products"],  // Unique query key
    fetchProducts, 
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor || undefined, // Retrieves next cursor
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

## Implementing Infinite Scrolling (Auto-Load on Scroll)

### Adding Auto-Scroll Trigger

```js
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchProducts = async ({ pageParam = null }) => {
  const res = await fetch(
    `https://api.example.com/products?cursor=${pageParam || ""}`
  );
  return res.json();
};

const InfiniteScrollProducts = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["products"], 
    fetchProducts, 
    { getNextPageParam: (lastPage) => lastPage.nextCursor || undefined }
  );

  const loadMoreRef = useRef();

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

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

      <div ref={loadMoreRef} style={{ height: "20px", background: "lightgray" }}>
        {isFetchingNextPage ? "Loading more..." : "Scroll to Load More"}
      </div>
    </div>
  );
};

export default InfiniteScrollProducts;
```

## Handling Edge Cases

### Handling Empty Pages

- If the API returns **no more data**, `hasNextPage` will be `false`, preventing unnecessary requests.  
    ```js
        getNextPageParam: (lastPage) => lastPage.nextCursor || null
    ```

### Keeping Previous Data While Fetching New Data

    ```js
        useInfiniteQuery(["products"], fetchProducts, {
        getNextPageParam: (lastPage) => lastPage.nextCursor || undefined,
        keepPreviousData: true, // Prevents flickering
        });
    ```

### Error Handling

    ```js
        const { isError, error } = useInfiniteQuery(["products"], fetchProducts, {});

        if (isError) return <h2>Error: {error.message}</h2>;
    ```

## Summary of Best Practices

- Use **`useInfiniteQuery`** for cursor-based or endless lists.  
- **Optimize API calls** by fetching small data chunks (e.g., `limit=10`).  
- Use **`keepPreviousData: true`** to avoid UI flickering.  
- Implement **`IntersectionObserver`** for smooth infinite scrolling.  
- Handle **empty states & errors gracefully** to avoid unnecessary API calls.  

