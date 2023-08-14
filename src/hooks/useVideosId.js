import { useEffect, useState } from "react";
import videosApi from "../api/videos.api";

const useVideosId = (id) => {
  const [video, setVideos] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const getVideos = async () => {
        const response = await videosApi.getVideoById(id);
        setVideos(response.data);
        setLoading(false);
      };
      getVideos();
    }, 3500);
  }, [id]);

  return { video, loading };
};

export default useVideosId;
