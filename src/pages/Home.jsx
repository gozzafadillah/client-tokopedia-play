import { useNavigate } from "react-router-dom";
import useGetVideos from "../hooks/useVideos";

const Home = () => {
  const navigate = useNavigate();
  const { videos, loading } = useGetVideos();
  console.log(videos, loading);
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        padding: "0 10%",
      }}
    >
      <div className="Login">
        <button onClick={() => navigate("/login")}>Login</button>
      </div>

      <div className="card-content">
        <div className="card">
          <h1>Cek</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ullam illum quod, enim aperiam aspernatur nostrum repellat. Error,
            inventore incidunt.
          </p>
        </div>
        <div className="card">
          <h1>Cek</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ullam illum quod, enim aperiam aspernatur nostrum repellat. Error,
            inventore incidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
