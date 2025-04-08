import axios from "axios";

export const dadataApi = axios.create({
  baseURL: "https://cleaner.dadata.ru/api",
  headers: {
    Authorization: `Token ${process.env.DADATA_API_KEY}`,
    "Content-Type": "application/json",
    "X-Secret": process.env.DADATA_API_SECRET,
  },
});
