import React from "react";
import "../assets/css/App.css";
import useVideos from "../hooks/useVideos";
import Card from "../components/Card";

const Home = () => {
  const { videos, loading } = useVideos();
  console.log(videos, loading);
  return (
    <div>
      <h1>Home</h1>
      <div className="container" style={{ padding: "3vh 5vw" }}>
        <div
          className="card-content"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {!loading ? (
            videos.map((video) => <Card data={video} />)
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
