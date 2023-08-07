import axiosInstance from "../axios/AxiosConfiguration";

const UserAPI = {
  async login(username, password) {
    try {
      const response = await axiosInstance.post("/users/signin", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.response.token);
    } catch (error) {
      throw error.response;
    }
  },
};

export default UserAPI;
