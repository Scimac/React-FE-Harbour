## Updating Data using TanStack React Query

### Overview

- TanStack Query (React Query) provides powerful mechanisms for updating data via **mutations**. 
- Unlike queries (which fetch data), mutations handle operations like creating, updating, or deleting data on the server.

### Why Use React Query for Updates?

- **Optimistic Updates** → Update UI instantly before confirmation from the server.
- **Automatic Cache Invalidations** → Ensures fresh data is shown after updates.
- **Fine-Grained Control** → Provides success, error, and loading states for better UX.

### Updating Data with useMutation

- The `useMutation` hook is used for modifying data, typically with `POST`, `PUT`, `PATCH`, or `DELETE` requests.

#### Example: Updating a User Profile

```jsx
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateUserProfile = async (userData) => {
  const res = await fetch(`https://api.example.com/users/${userData.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

const UserProfile = ({ user }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(updateUserProfile, {
    onSuccess: (updatedData) => {
      // Invalidate and refetch the user data after update
      queryClient.invalidateQueries(["user", user.id]);
    },
  });

  const handleUpdate = () => {
    mutation.mutate({ id: user.id, name: "Updated Name" });
  };

  return (
    <div>
      <h2>User: {user.name}</h2>
      <button onClick={handleUpdate} disabled={mutation.isLoading}>
        {mutation.isLoading ? "Updating..." : "Update Name"}
      </button>
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
    </div>
  );
};
```

#### Key Learnings

- `useMutation` handles the update logic.
- `invalidateQueries(["user", user.id])` ensures the UI fetches fresh data.
- Handles loading and error states for better UX.

### Optimistic Updates (Instant UI Updates)

- Instead of waiting for the server response, we update the UI immediately, then rollback if needed.

```jsx
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateTodo = async (todo) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  return fetch(`https://api.example.com/todos/${todo.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  }).then((res) => res.json());
};

const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(updateTodo, {
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries(["todos"]); // Cancel ongoing queries
      const previousTodos = queryClient.getQueryData(["todos"]); // Snapshot old data

      // Optimistically update UI
      queryClient.setQueryData(["todos"], (oldTodos) =>
        oldTodos.map((t) => (t.id === newTodo.id ? newTodo : t))
      );

      return { previousTodos }; // Return previous data in case of rollback
    },
    onError: (_error, _newTodo, context) => {
      queryClient.setQueryData(["todos"], context.previousTodos); // Rollback on error
    },
    onSettled: () => {
      queryClient.invalidateQueries(["todos"]); // Refetch actual data
    },
  });

  return (
    <div>
      <h3>{todo.title}</h3>
      <button
        onClick={() => mutation.mutate({ ...todo, completed: !todo.completed })}
      >
        {mutation.isLoading ? "Updating..." : "Toggle Complete"}
      </button>
    </div>
  );
};
```

#### Key Learnings

- `onMutate` updates UI before server response.
- `onError` rolls back to previous state if the update fails.
- `onSettled` ensures final refetch for consistency.

### Updating Nested Data in the Cache

- Sometimes, updates require modifying a deeply nested object without refetching the entire query.

#### Example: Updating a Comment in a Blog Post

```jsx
const updateComment = async ({ postId, commentId, newText }) => {
  return fetch(`https://api.example.com/posts/${postId}/comments/${commentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: newText }),
  }).then((res) => res.json());
};

const useUpdateComment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateComment, {
    onSuccess: (updatedComment, { postId }) => {
      queryClient.setQueryData(["post", postId], (oldPost) => {
        return {
          ...oldPost,
          comments: oldPost.comments.map((c) =>
            c.id === updatedComment.id ? updatedComment : c
          ),
        };
      });
    },
  });
};
```

#### Key Learnings

- `setQueryData()` manually updates cache without refetching.
- Only the modified comment is updated, avoiding unnecessary API calls.

### Deleting Data using useMutation

- Handling DELETE operations requires removing data from the cache.

#### Example: Deleting a Post

```jsx
const deletePost = async (postId) => {
  return fetch(`https://api.example.com/posts/${postId}`, { method: "DELETE" });
};

const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation(deletePost, {
    onMutate: async (postId) => {
      await queryClient.cancelQueries(["posts"]);
      const previousPosts = queryClient.getQueryData(["posts"]);

      queryClient.setQueryData(["posts"], (oldPosts) =>
        oldPosts.filter((post) => post.id !== postId)
      );

      return { previousPosts };
    },
    onError: (_error, _postId, context) => {
      queryClient.setQueryData(["posts"], context.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};
```

####  Key Learnings

- Removes post from cache instantly.
- Rolls back if deletion fails.
- Invalidates queries to ensure consistency.

### Updating Data with WebSockets or Subscriptions

- In real-time applications, subscriptions or WebSockets can be used to update data without user actions.

#### Example: Live Chat Messages Update

```jsx
useEffect(() => {
  const socket = new WebSocket("wss://chat-server.com");

  socket.onmessage = (event) => {
    const newMessage = JSON.parse(event.data);
    queryClient.setQueryData(["messages"], (oldMessages) => [
      ...oldMessages,
      newMessage,
    ]);
  };

  return () => socket.close();
}, []);
```

#### Key Learnings

- Uses WebSockets to update messages in real-time.
- `setQueryData()` appends new messages without refetching.

### Summary & Best Practices

- Use `useMutation` for updates (POST, PUT, PATCH, DELETE).
- Leverage `invalidateQueries` to fetch fresh data after an update.
- Use optimistic updates (`onMutate`) for a faster UI experience.
- Handle rollback (`onError`) to revert changes on failure.
- Use `setQueryData()` for modifying cache without refetching.
- Leverage WebSockets for real-time updates.
