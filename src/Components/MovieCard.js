import React from "react";
import { useState } from "react";
import "./MovieCard.css";
import { Container, Row, Col } from "react-bootstrap";

const MovieCard = () => {
  const [data, setData] = useState({
    title: "title",
    description: "description",
    posterURL: "https://via.placeholder.com/200x300",
    rating: "6",
  });

  const handleClick = () =>
    setData({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });

  return (
    <>
      <div className="movie-card">
        <div className="justify-content-md-center">
          <h2>{data.title}</h2>
          <h2>{data.description}</h2>
          <img src={data.posterURL} alt="image" />
          <h2>{data.rating}</h2>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
