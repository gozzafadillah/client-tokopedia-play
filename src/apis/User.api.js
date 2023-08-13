import axiosInstance from "../axios/AxiosConfiguration";

const UserAPI = {
  async login(email, password) {
    try {
      const response = await axiosInstance.post("/users/signin", {
        email,
        password,
      });
      localStorage.setItem(
        "accessToken",
        response.data.response.tokens.accessToken
      );
      localStorage.setItem(
        "refreshToken",
        response.data.response.tokens.refreshToken
      );
    } catch (error) {
      throw error.response;
    }
  },
};

export default UserAPI;
