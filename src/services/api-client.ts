import axios from "axios";

const API_BASE_URL = "https://dummy-api-topaz.vercel.app";
const FIVE_SECONDS = 5000;

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: FIVE_SECONDS,
  headers: {
    "Content-Type": "application/json",
  },
});
