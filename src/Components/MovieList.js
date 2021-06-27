import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map((movie) => (
          <Col style={{ marginBottom: 30 }}>
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
