import React from "react";
import { useState } from "react";
import "./MovieCard.css";
import { Container, Row, Col } from "react-bootstrap";

const MovieCard = (props) => {
  const [data, setData] = useState({
    title: props.t,
    description: props.d,
    posterURL: props.url,
    rating: props.rate,
  });

  // const handleClick = () =>
  //   setData({
  //     title: props.t,
  //     description: props.d,
  //     posterURL: props.url,
  //     rating: props.rate,
  //   });

  return (
    <>
      <div className="movie-card">
        <div className="justify-content-md-center">
          <h5>{data.title}</h5>
          <h6>{data.description}</h6>
          <img className="movie-img" src={data.posterURL} alt="image" />
          <h2>{data.rating}</h2>
          {/* <button onClick={handleClick}>Click Me</button> */}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
