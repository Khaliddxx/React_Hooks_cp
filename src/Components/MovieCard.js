import React from "react";
import { useState } from "react";
import "./MovieCard.css";
import { Container, Row, Col } from "react-bootstrap";

const MovieCard = () => {
  const [data, setData] = useState({
    title: "title",
    description: "description",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
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
