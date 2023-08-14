import axios from "axios";

const config = {
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
    "Content-Type": "application/json",
  },
};

const AxiosInstance = axios.create(config);

export default AxiosInstance;
