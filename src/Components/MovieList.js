import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <MovieCard
              t={"Paw Patrol"}
              d={"Paramont+ Studios."}
              url={
                "https://www.joblo.com/assets/images/joblo/posters/2021/06/rsz_paw_patrol_the_movie_poster.jpg"
              }
              rate={"7"}
            />
          </Col>
          <Col>
            <MovieCard
              t={"Shang-Chi"}
              d={"Marvel Cinematic Universe"}
              url={
                "https://www.joblo.com/assets/images/joblo/posters/2021/06/Shang-Chi-poster-4062076.jpg"
              }
              rate={"8"}
            />
          </Col>
          <Col>
            <MovieCard
              t={"Army of The Dead"}
              d="A group of mercenaries plot a heist on a Las Vegas casino during a zombie outbreak."
              url="https://www.joblo.com/assets/images/joblo/posters/2021/04/army-of-the-dead-poster.jpg"
              rate={"8.5"}
            />
          </Col>
          <Col>
            <MovieCard
              t={"Concrete Cowboy"}
              d={"urban horseback riding."}
              url="https://www.joblo.com/assets/images/joblo/posters/2021/03/concrete-cowboy-poster-netflix-idris-elba.jpg"
              rate={"8"}
            />
          </Col>
          <Col>
            <MovieCard
              t={"Voyagers"}
              d={"the future of the human race in dange"}
              url="https://www.joblo.com/assets/images/joblo/posters/2021/03/voyagers-151251.jpg"
              rate={"9"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieList;
