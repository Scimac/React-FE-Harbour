# **Observers in TanStack Query**  

## **Overview**  
Observers in TanStack Query are responsible for managing query subscriptions and ensuring that components receive updates when query data changes. They enable **reactive data fetching** and are essential for handling multiple components using the same query.  

---

## **Why Are Observers Used?**  

- **Efficient Query Management** → Avoids unnecessary re-fetches by ensuring only relevant components get updates.  
- **Multiple Observers for the Same Query** → Multiple components can observe the same query and react to changes.  
- **Auto-Refetching on State Changes** → Ensures UI consistency by automatically fetching fresh data when needed.  
- **Dynamic Query Subscriptions** → Components can dynamically subscribe/unsubscribe to queries without performance hits.  

---

## **Types of Observers in TanStack Query**  

- **`QueryObserver`** → Observes a specific query and reacts to data updates.  
- **`InfiniteQueryObserver`** → Observes infinite queries for paginated or cursor-based data fetching.  
- **`QueriesObserver`** → Observes multiple queries at once, useful for parallel fetching.  

---

# **QueryObserver**
### **What is QueryObserver?**  
`QueryObserver` is used to programmatically subscribe to a single query. It allows managing query subscriptions outside of React components, such as in **custom hooks** or **services**.  

### **Implementation Example**  

```js
import { QueryObserver, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const observer = new QueryObserver(queryClient, {
  queryKey: ["user", 1], // Observing user with ID 1
  queryFn: async () => {
    const res = await fetch("https://api.example.com/users/1");
    return res.json();
  },
  enabled: true, // Auto-fetch enabled
});

const unsubscribe = observer.subscribe((result) => {
  console.log("User data updated:", result.data);
});

// Unsubscribe when not needed
unsubscribe();
```

**Key Features:**  
✔ Allows observing a specific query outside of React.  
✔ Can be used in **state management stores** or **event-driven architectures**.  

---

# **InfiniteQueryObserver**
### **What is InfiniteQueryObserver?**  
`InfiniteQueryObserver` is a special observer for handling **infinite scrolling** or **paginated data** efficiently.  

### **Implementation Example**  

```js
import { InfiniteQueryObserver, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const observer = new InfiniteQueryObserver(queryClient, {
  queryKey: ["products"],
  queryFn: async ({ pageParam = 1 }) => {
    const res = await fetch(`https://api.example.com/products?page=${pageParam}`);
    return res.json();
  },
  getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
});

const unsubscribe = observer.subscribe((result) => {
  console.log("Infinite Query Data Updated:", result.data);
});

// Unsubscribe when needed
unsubscribe();
```

**Key Features:**  
✔ Supports paginated and infinite scrolling data fetching.  
✔ Automatically tracks **next page params**.  
✔ Efficiently fetches new data without reloading the entire dataset.  

---

# **QueriesObserver**
### **What is QueriesObserver?**  
`QueriesObserver` is used for observing multiple queries simultaneously. It is useful for fetching **parallel queries** or managing **dependent queries** dynamically.  

### **Implementation Example**  

```js
import { QueriesObserver, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const observer = new QueriesObserver(queryClient, [
  {
    queryKey: ["user", 1],
    queryFn: async () => {
      const res = await fetch("https://api.example.com/users/1");
      return res.json();
    },
  },
  {
    queryKey: ["orders", 1],
    queryFn: async () => {
      const res = await fetch("https://api.example.com/orders?userId=1");
      return res.json();
    },
  },
]);

const unsubscribe = observer.subscribe((result) => {
  console.log("User Data:", result[0]?.data);
  console.log("Orders Data:", result[1]?.data);
});

// Unsubscribe when needed
unsubscribe();
```

**Key Features:**  
✔ Fetches multiple queries in parallel.  
✔ Can be used for **dashboard components** that need different datasets simultaneously.  
✔ Prevents unnecessary re-fetching by efficiently managing multiple query subscriptions.  

---

## **When to Use Observers?**  

| Use Case | Observer Type | Example |
|----------|--------------|---------|
| Watching a single query outside of React | `QueryObserver` | Fetch user profile data in a Redux store |
| Handling infinite scrolling | `InfiniteQueryObserver` | Social media feeds, chat apps |
| Fetching multiple queries in parallel | `QueriesObserver` | Dashboard fetching user + orders data |

---

## **Summary of Best Practices**  

- **Use `QueryObserver` for single queries** in non-component logic.  
- **Use `InfiniteQueryObserver` for paginated data** to optimize infinite scrolling.  
- **Use `QueriesObserver` for multiple queries** when multiple datasets are needed simultaneously.  
- **Always unsubscribe observers** when they are no longer needed to avoid memory leaks.  
