import { useState, useEffect } from "react";
import VideoAPI from "../apis/videos.api";

const useGetVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideo = async () => {
      try {
        setLoading(true);
        const response = await VideoAPI.getVideos();
        setVideos(response.videos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideos([]);
        setLoading(false);
      }
    };

    getVideo();
  }, []);

  return { videos, loading };
};

export default useGetVideos;
