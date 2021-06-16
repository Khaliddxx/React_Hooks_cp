import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <MovieCard />
            <button onClick={MovieCard.handleClick}>Click Me</button>
          </Col>
          <Col>
            <MovieCard />
          </Col>
          <Col>
            <MovieCard />
          </Col>
          <Col>
            <MovieCard />
          </Col>
          <Col>
            <MovieCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieList;
