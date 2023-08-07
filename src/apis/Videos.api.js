import AxiosInstance from "../axios/AxiosConfiguration";

const VideoAPI = {
  async getVideos() {
    try {
      const response = await AxiosInstance.get("/videos");
      return response.data;
    } catch (error) {
      throw error.response;
    }
  },
};

export default VideoAPI;
