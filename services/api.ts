// services/api.ts
import axios from "axios";
import { getToken } from "../storage/tokenStorage";

const api = axios.create({
  baseURL: "https://voxia-api.onrender.com", 
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(
  async (config) => {
    try {
      const token = await getToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      console.warn("Erro ao ler token para enviar no header:", e);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
