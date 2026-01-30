import axios from "axios";

export const http = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken",
  timeout: 15000,
});