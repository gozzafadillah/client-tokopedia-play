import axios from "axios";

const config = {
  // baseURL: "https://api.intelligo.id/api",
  baseURL: "https://midterm-project-production-f154.up.railway.app",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "application/json",
  },
};

const AxiosInstance = axios.create(config);

export default AxiosInstance;
