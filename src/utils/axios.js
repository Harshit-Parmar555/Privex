// Importing necessary modules
import axios from "axios";

// API URL for development and production
const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:4000/api/v1"
    : import.meta.env.VITE_BACKEND_URL;

// Axios instance for api's call
export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
