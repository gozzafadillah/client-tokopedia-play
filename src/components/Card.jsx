import React from "react";

const Card = ({ data }) => {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        margin: "auto",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <img
        src="https://picsum.photos/200/300"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <a href="/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
