import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = ({ data }) => {
    return (
        <div>
            <Container>
                <Row>
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
                </Row>
            </Container>
        </div>
    );
};

export default MovieList;
