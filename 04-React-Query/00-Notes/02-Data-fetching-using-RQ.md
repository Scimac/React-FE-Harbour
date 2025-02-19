# React Query vs Traditional Data Fetching with useEffect and useState

- Let's compare how data fetching is handled using React Query and the traditional useEffect + useState approach.

## Traditional Data Fetching with useEffect and useState

- Using useEffect and useState for data fetching requires handling loading, error, and success states manually.

### Example: Fetching a List of Posts

```jsx
import React, { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
```

### Limitations of this Approach

1. **Boilerplate Code**: Requires repetitive code for managing states (loading, error, success).
2. **Caching**: No built-in caching or deduplication of requests.
3. **Synchronization**: Manual effort required to ensure data stays fresh.
4. **Error Handling**: Custom error-handling logic needs to be implemented.

## Data Fetching with React Query

- React Query simplifies data fetching with declarative APIs and built-in state management.

### Example: Fetching a List of Posts

```jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

function Posts() {
  const { data: posts, isLoading, isError, error } = useQuery(['posts'], async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
```

### Benefits of React Query

1. **Automatic State Management**: Built-in states like `isLoading`, `isError`, and `isSuccess` simplify asynchronous logic.
2. **Caching**: Queries are cached automatically, reducing redundant requests.
3. **Data Synchronization**: Provides tools for background refetching and cache invalidation.
4. **Error Handling**: Simplified error handling integrated into the API.
5. **Devtools**: Debugging and inspecting query states are easier with React Query Devtools.

## Key Differences

| Feature               | useEffect + useState           | React Query                      |
|-----------------------|---------------------------------|-----------------------------------|
| State Management      | Manual                        | Automatic                        |
| Caching               | Not Built-In                  | Built-In                         |
| Refetching            | Manual Implementation Needed  | Automatic or Configurable        |
| Boilerplate Code      | High                          | Low                              |
| Error Handling        | Custom Logic Required         | Simplified with `isError`        |
| Devtools              | Not Available                 | Available                        |

React Query offers a more robust and efficient approach to managing server-state in React applications, reducing boilerplate and improving maintainability.

> Checkout the worked out example in [React Query Comparision with useEffect Data Fetch](../01-react-query-comparision/README.md)