import axios from "axios";

export const selfApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SELF_URL,
});
