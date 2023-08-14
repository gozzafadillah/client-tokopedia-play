import AxiosInstance from "../axios/AxiosInstance";

const UserApi = {
  async login(user) {
    try {
      const response = await AxiosInstance.post("/users/signin", user);
      console.log(response.data.response.tokens);
      localStorage.setItem(
        "accessToken",
        response.data.response.tokens.accessToken
      );
      localStorage.setItem(
        "refreshToken",
        response.data.response.tokens.refreshToken
      );
    } catch (error) {
      throw error;
    }
  },
};

export default UserApi;
