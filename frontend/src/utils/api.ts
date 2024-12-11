import axios from "axios";

const apiUrl =
  process.env.REACT_APP_API_URL;
console.log(apiUrl);
const apiClient = axios.create({
  baseURL: apiUrl,
});

export default apiClient;