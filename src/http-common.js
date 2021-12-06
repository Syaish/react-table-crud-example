import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:44359/api/",
  headers: {
    "Content-type": "application/json"
  }
});