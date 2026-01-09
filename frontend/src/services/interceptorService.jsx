import axios from "axios";

// Create an instance of axios with the desired configuration
const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Create an interceptor to handle token authentication
api.interceptors.request.use(async (config) => {
  try {
    const token = await getToken(); // Get the token from your authentication system

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    console.error("Error getting token:", error);
    return Promise.reject(error);
  }
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status;
    // const message = error.response?.data?.message || "An unexpected error occurred";

    if (status === 401) {
      localStorage.removeItem("token");

      if (window.location.pathname !== "/") {
        window.location.href = "/";
      }
    } else if (status === 429) {
      console.error('Too many requests, please try again later.');
    }
    return Promise.reject(error);
  }
);

export const getToken = () => {
  try {
    const token = localStorage.getItem("token");
    return token || null;
  } catch (error) {
    console.error("Error getting token:", error);
    return null;
  }
};
export default api;

