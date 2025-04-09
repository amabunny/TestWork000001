import axios from "axios";

export const oxilorApi = axios.create({
  baseURL: "https://data-api.oxilor.com/",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OXILOR_API_KEY}`,
  },
});
