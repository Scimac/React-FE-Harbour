## Resetting and Persisting Mutations in TanStack React Query

### Overview

- TanStack React Query provides powerful utilities to reset and persist mutations, ensuring flexibility and reliability in handling API requests. 
- This is particularly useful in scenarios like:
    - **Form Resets** → Clear mutation states when switching screens.
    - **Handling Errors Gracefully** → Reset errors after showing messages.
    - **Persisting Mutations Across Page Reloads** → Retain pending mutations in case of network failure.

### Resetting Mutations in React Query

#### Why Reset Mutations?

- Mutations store state (`isLoading`, `isError`, `data`), which can persist until another mutation occurs. Resetting helps in:
    - Clearing mutation state after successful submission.
    - Resetting form fields after an API call.
    - Avoiding stale errors when users retry.
- Use `mutation.reset()` to clear mutation data, error, and status manually.

#### Example: Resetting Mutation after Form Submission

```jsx
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const submitForm = async (userData) => {
  const response = await fetch("/api/submit", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Submission failed!");
  return response.json();
};

const FormComponent = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const mutation = useMutation(submitForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? "Submitting..." : "Submit"}
      </button>

      {mutation.isSuccess && (
        <>
          <p>✅ Submission successful!</p>
          <button onClick={mutation.reset}>Reset</button>
        </>
      )}

      {mutation.isError && (
        <>
          <p>❌ Error: {mutation.error.message}</p>
          <button onClick={mutation.reset}>Try Again</button>
        </>
      )}
    </form>
  );
};
```

#### Key Takeaways:

- `mutation.reset()` clears the success/error state.
- Useful for retries, clearing UI states, and resetting forms.

## Persisting Mutations in React Query

### Why Persist Mutations?

- When a mutation is triggered (like form submission), it does not persist across page reloads by default. However, you may want to:
    - **Retry Mutations After Network Loss** → Persist unsynced data.
    - **Retain State in SPAs** → Restore pending operations after navigation.
    - **Offline Support** → Allow users to submit when offline and sync later.

### How to Persist Mutations?

-TanStack Query provides a Persistence API using `createSyncStoragePersister()` (from `@tanstack/react-query-persist-client`). This saves mutation state in `localStorage`, `sessionStorage`, or `IndexedDB`.

#### Enabling Persistent Mutations

#### Example: Persisting Mutations in LocalStorage

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient, createSyncStoragePersister } from "@tanstack/react-query-persist-client";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: 3, // Auto-retry failed mutations
    },
  },
});

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage, // Persist in localStorage
});

persistQueryClient({
  queryClient,
  persister: localStoragePersister,
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
);

export default App;
```

#### Key Takeaways:

- `persistQueryClient()` persists mutation data across reloads.
- `retry: 3` automatically retries failed mutations 3 times.
- `localStoragePersister` ensures persistence in `localStorage`.

### Persisting Pending Mutations

- If a mutation fails due to network issues, we can retry it once the network is restored.

#### Example: Offline Mutation Handling

```jsx
import { persistQueryClient, createSyncStoragePersister } from "@tanstack/react-query-persist-client";

const mutation = useMutation(submitForm, {
  onMutate: async (newData) => {
    await queryClient.cancelQueries(["formData"]);
    queryClient.setQueryData(["formData"], (oldData) => [...oldData, newData]);
  },
  retry: 3, // Automatically retry on failure
  networkMode: "always",
});

const handleSubmit = () => {
  mutation.mutate(formData);
};
```

#### Key Takeaways:
- `retry: 3` → Automatically retries failed mutations.
- `networkMode: "always"` → Ensures mutation runs even offline and retries when reconnected.

## Comparison: Resetting vs Persisting Mutations

| Feature | mutation.reset() | Persistent Mutations |
| ------- | ---------------- | -------------------- |
| Clears mutation state | ✅ Yes | ❌ No |
| Resets error/success messages | ✅ Yes | ❌ No |
| Prevents stale UI states | ✅ Yes | ✅ Yes |
| Works across page reloads | ❌ No | ✅ Yes |
| Useful for offline mode | ❌ No | ✅ Yes |

## Summary & Best Practices
- Use `mutation.reset()` for clearing UI errors, resetting forms, and handling retries.
- Use Persistent Mutations (`persistQueryClient`) for offline-friendly apps.
- Set `retry: 3` for auto-retrying failed mutations.
- Use `networkMode: "always"` to sync pending data after connection is restored.
