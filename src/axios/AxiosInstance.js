import axios from "axios";

const config = {
  //   baseURL: "https://api.intelligo.id/api",
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
    "Content-Type": "application/json",
  },
};

const AxiosInstance = axios.create(config);

export default AxiosInstance;
