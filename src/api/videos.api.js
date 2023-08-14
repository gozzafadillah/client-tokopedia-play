import AxiosInstance from "../axios/AxiosInstance";

const videosApi = {
  async getVideos() {
    try {
      const response = await AxiosInstance.get("/videos");
      return response;
    } catch (error) {
      throw error;
    }
  },
  async getVideoById(id) {
    try {
      const response = await AxiosInstance.get(`/videos/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default videosApi;
