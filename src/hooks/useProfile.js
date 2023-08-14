import { useEffect, useState } from "react";
import UserApi from "../api/user.api";

const useProfile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await UserApi.profile();
        setProfile(response.data.user);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    };
    getProfile();
  }, []);
  return { profile, loading };
};

export default useProfile;
