import AxiosInstance from "../axios/AxiosInstance";

const CommemtAPI = {
  async getComments(_id) {
    try {
      const response = await AxiosInstance.get(`/comments/${_id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async createComment(_id, comment) {
    try {
      const response = await AxiosInstance.post(`/comments/${_id}`, {
        comment,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default CommemtAPI;
