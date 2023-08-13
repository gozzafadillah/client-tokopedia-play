import { useEffect, useState } from "react";
import videosApi from "../api/videos.api";

const useVideos = () => {
  const [videos, setVideos] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      const response = await videosApi.getVideos();
      setVideos(response.data.videos);
      setLoading(false);
    };

    getVideos();
  }, []);

  return { videos, loading };
};

export default useVideos;
