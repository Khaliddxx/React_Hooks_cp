import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = ({ data }) => {
  return (
    <div className="container mt-5">
      <div className="row mb-5">
        {data.map((movie) => (
          <Col>
            <MovieCard
              t={movie.title}
              d={movie.description}
              url={movie.posterURL}
              rate={movie.rating}
            />
          </Col>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
