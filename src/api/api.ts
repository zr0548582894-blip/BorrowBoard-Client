import axios from "axios";

const baseURL=import.meta.env.VITE_API_URL;

if (!baseURL) {
  throw new Error("VITE_API_URL is missing");
}
export const api = axios.create({
  baseURL:`${baseURL}/api`,});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.error?.message ?? "לא ניתן להתחבר לשרת";
    return Promise.reject(new Error(message));
  }
);