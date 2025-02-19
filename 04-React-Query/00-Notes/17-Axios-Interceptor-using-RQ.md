## Creating an Axios Interceptor with TanStack React Query

### Preface: What is an Axios Interceptor?

- An **Axios Interceptor** is a **middleware function** that allows you to modify requests or responses before they are handled by `.then()` or `.catch()`.

#### Use Cases for Axios Interceptors:

- Global Error Handling → Catch and handle API errors.
- Token Injection → Automatically add authentication tokens.
- Logging Requests/Responses → Debugging API calls.
- Refreshing Expired Tokens → Handle authentication refresh logic.

## Axios Interceptor with TanStack React Query

- TanStack React Query works seamlessly with Axios to automate API calls, error handling, and token management, making Axios interceptors a crucial addition.

### Basic Axios Interceptor (Logging Requests & Errors)

- We create a simple Axios interceptor that:
    - Logs all outgoing API requests.
    - Handles API errors globally.

#### Implementing Basic Interceptor

```jsx
import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`📡 Sending request to ${config.url}`);
    return config;
  },
  (error) => {
    console.error("❌ Request error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("✅ Response received:", response);
    return response;
  },
  (error) => {
    console.error("❌ API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
```

#### Key Features:

- Logs outgoing requests with URL details.
- Logs API responses & errors globally.
- Improves debugging by tracking API behavior.

### Complex Axios Interceptor (Token Refresh & Error Handling)

- We create an advanced Axios interceptor that:
    - Attaches Authorization Token from localStorage.
    - Automatically Refreshes Token if expired.
    - Retries Failed Requests after token refresh.
    - Handles Unauthorized Errors (401) by logging out users.

#### Implementing Advanced Interceptor

```jsx
import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
});

// Function to get the access token
const getAccessToken = () => localStorage.getItem("access_token");

// Function to refresh the token
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refresh_token");
    const response = await axios.post("https://api.example.com/auth/refresh", { refreshToken });
    localStorage.setItem("access_token", response.data.accessToken);
    return response.data.accessToken;
  } catch (error) {
    console.error("❌ Token refresh failed:", error);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/login"; // Redirect to login on failure
    throw error;
  }
};

// Request Interceptor → Attach Token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor → Handle Token Expiry & Errors
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If Unauthorized (401) & Token Expired, Refresh Token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshAccessToken();
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest); // Retry failed request
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    // Log error and reject
    console.error("❌ API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
```

#### Key Features:

- Attaches Token to every request automatically.
- Handles Expired Tokens by refreshing them before retrying.
- Retries API Requests after successful token refresh.
- Redirects Users to Login if the refresh fails.

### Using Axios Interceptor with TanStack React Query

- Once our Axios instance is ready, we can use it inside TanStack Query for API calls.

#### Example: Fetching Data with Interceptor

```jsx
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const fetchUserProfile = async () => {
  const { data } = await axiosInstance.get("/user/profile");
  return data;
};

const UserProfile = () => {
  const { data, error, isLoading } = useQuery(["userProfile"], fetchUserProfile);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>❌ Error: {error.message}</p>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
    </div>
  );
};
```

### Key Features:

- Uses Axios Interceptor for token management.
- Automatically attaches headers to requests.
- TanStack Query caches data and handles errors gracefully.

## Summary & Best Practices

- Basic Axios Interceptor
    - Logs requests and errors for debugging.
    - Handles API failures globally.

- Advanced Axios Interceptor
    - Automatically attaches tokens to requests.
    - Refreshes expired tokens & retries failed requests.
    - Logs users out if authentication fails.

- Using Interceptors with TanStack Query
    - Simplifies error handling and caching.
    - Works seamlessly with React Query’s useQuery & useMutation.