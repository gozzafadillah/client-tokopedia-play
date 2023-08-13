import AxiosInstance from "../axios/AxiosInstance";

const UserApi = {
  async login(user) {
    try {
      await AxiosInstance.get("/login", user);
    } catch (error) {
      throw error;
    }
  },
};

export default UserApi;
