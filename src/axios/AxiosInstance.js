import axios from "axios";

const config = {
  // baseURL: "http://localhost:4000",
  baseURL: "https://finalprojectserver-production-6bdc.up.railway.app",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
    "Content-Type": "application/json",
  },
};

const AxiosInstance = axios.create(config);

export default AxiosInstance;
