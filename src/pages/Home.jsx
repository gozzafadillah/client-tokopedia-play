import { useNavigate } from "react-router-dom";
import useGetVideos from "../hooks/useVideos";

const Home = () => {
  const navigate = useNavigate();
  const { videos, loading } = useGetVideos();
  console.log(videos, loading);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        padding: "0 5%",
      }}
    >
      <div className="Login">
        <button onClick={() => navigate("/login")}>Login</button>
      </div>

      <div className="card-content">
        {!loading ? (
          videos.map((video) => (
            <>
              <div className="card">
                <h1>{video.title}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente ullam illum quod, enim aperiam aspernatur nostrum
                  repellat. Error, inventore incidunt.
                </p>
              </div>
            </>
          ))
        ) : (
          <>
            <h1>Loading...</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
