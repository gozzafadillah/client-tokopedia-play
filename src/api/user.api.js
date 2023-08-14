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
  async register({ email, username, password }) {
    try {
      const response = await AxiosInstance.post("/users/signup", {
        email,
        username,
        password,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  async profile() {
    try {
      const response = await AxiosInstance.get("/users/profile");
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default UserApi;
