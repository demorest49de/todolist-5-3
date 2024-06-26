import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "5ff7c3a9-629f-413d-ae6e-ffa9c6aed825",
  },
});
