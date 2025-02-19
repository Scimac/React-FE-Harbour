## Handling Mutation Response & Optimistic Updates in TanStack React Query

### Overview

- TanStack Query provides a robust way to handle mutations (POST, PUT, PATCH, DELETE) and offers optimistic updates to improve user experience by instantly reflecting changes in the UI before getting a server response.

- Handle API responses effectively (success, error, and loading states).
- **Optimistic Updates** → Instantly update UI and rollback if needed.
- Improve User Experience by making interactions feel faster.

### Handling Mutation Response in React Query

#### Why Handle Mutation Responses?

- When making API calls, mutations return a response that needs to be handled properly:
    - **Success Handling** → Update UI, show success messages, and refetch queries.
    - **Error Handling** → Display errors and retry failed requests.
    - **Loading State** → Disable buttons or show loading spinners.

#### Example: Handling Mutation Response

```jsx
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateUserProfile = async (userData) => {
  const res = await fetch(`/api/users/${userData.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!res.ok) throw new Error("Failed to update user!");
  return res.json();
};

const UserProfile = ({ user }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(updateUserProfile, {
    onSuccess: (updatedUser) => {
      console.log("User updated successfully!", updatedUser);
      queryClient.invalidateQueries(["user", user.id]); // Refetch user data
    },
    onError: (error) => {
      console.error("Update failed:", error.message);
    },
  });

  return (
    <div>
      <h2>User: {user.name}</h2>
      <button onClick={() => mutation.mutate({ id: user.id, name: "New Name" })} disabled={mutation.isLoading}>
        {mutation.isLoading ? "Updating..." : "Update Name"}
      </button>
      {mutation.isError && <p style={{ color: "red" }}>❌ {mutation.error.message}</p>}
    </div>
  );
};
```

### Key Takeaways:

- `onSuccess` → Handles successful response, invalidates queries to fetch fresh data.
- `onError` → Logs and displays error messages.
- `mutation.isLoading` → Disables button during the update process.

### Optimistic Updates in React Query
 
#### Why Use Optimistic Updates?

Optimistic updates instantly reflect UI changes before the server response to improve responsiveness.
    - **Faster UI Feedback** → No waiting for API response.
    - **Smoother User Experience** → Updates feel instant.
    - **Rollback on Failure** → Revert UI changes if the request fails.


#### How to Implement Optimistic Updates?

- Use onMutate to update the UI before making the API call and rollback if an error occurs.

#### Optimistic UI Update Example (To-Do List)

- In this example, we optimistically mark a To-Do as completed before getting confirmation from the server.

```jsx
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateTodoStatus = async (todo) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
  return fetch(`/api/todos/${todo.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: todo.completed }),
  }).then((res) => res.json());
};

const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(updateTodoStatus, {
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries(["todos"]); // Cancel ongoing queries
      const previousTodos = queryClient.getQueryData(["todos"]); // Store old data

      // ✅ Optimistically update UI
      queryClient.setQueryData(["todos"], (oldTodos) =>
        oldTodos.map((t) => (t.id === newTodo.id ? newTodo : t))
      );

      return { previousTodos }; // Store old data in case of rollback
    },
    onError: (_error, _newTodo, context) => {
      queryClient.setQueryData(["todos"], context.previousTodos); // Rollback UI
    },
    onSettled: () => {
      queryClient.invalidateQueries(["todos"]); // Refetch data
    },
  });

  return (
    <div>
      <h3>{todo.title}</h3>
      <button onClick={() => mutation.mutate({ ...todo, completed: !todo.completed })}>
        {mutation.isLoading ? "Updating..." : "Toggle Complete"}
      </button>
    </div>
  );
};
```

#### Key Takeaways:

- `onMutate` → Updates UI before server response.
- `onError` → Reverts UI if mutation fails.
- `onSettled` → Ensures the final data is fresh and correct.

### Optimistic Update for Adding a New Item

- When adding a new item, we update the cache before the server confirms and rollback if it fails.

#### Example: Optimistically Adding a New Post

```jsx
const addPost = async (newPost) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  return fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  }).then((res) => res.json());
};

const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation(addPost, {
    onMutate: async (newPost) => {
      await queryClient.cancelQueries(["posts"]);
      const previousPosts = queryClient.getQueryData(["posts"]);

      queryClient.setQueryData(["posts"], (oldPosts) => [...oldPosts, newPost]);

      return { previousPosts };
    },
    onError: (_error, _newPost, context) => {
      queryClient.setQueryData(["posts"], context.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};
```

#### Key Takeaways:

-Instantly adds a new post before server confirmation.
-Rollback on failure to keep data consistent.
-Uses invalidateQueries(["posts"]) to refetch actual data.

### Summary & Best Practices

- Handling Mutation Responses:
    - Use onSuccess to invalidate queries and fetch fresh data.
    - Use onError to handle failures gracefully.
    - Track loading state with mutation.isLoading.

- Optimistic Updates:
    - Use onMutate to update UI instantly.
    - Store previous data in case rollback is needed.
    - Use onError to revert UI on failure.
    - Always invalidate queries after mutation to ensure correctness.
