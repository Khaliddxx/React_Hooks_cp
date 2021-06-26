import React from "react";
import { useState } from "react";
import "./MovieCard.css";
import { card } from "react-bootstrap";

const MovieCard = (props) => {
    const [data, setData] = useState({
        title: props.t,
        description: props.d,
        posterURL: props.url,
        rating: props.rate,
    });

    // const handleClick = () =>
    //   setData({
    //     title: "",
    //     description: "",
    //     posterURL: "",
    //     rating: "",
    //   });

    return (
        <>
            {/* <div className="movie-card">
        <div className="justify-content-md-center">
          <h5>{data.title}</h5>
          <h6>{data.description}</h6>
          <img className="movie-img" src={data.posterURL} alt="movie..." />
          <h2>{data.rating}</h2>
        </div>
      </div> */}

            <div
                class="card"
                style={{
                    width: "15rem",
                    height: "33rem",
                    border: "2px solid",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    overflow: "hidden",
                }}
            >
                <img
                    class="card-img-top"
                    src={data.posterURL}
                    alt="Card image cap"
                />
                <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>
                    <p class="card-text">{data.description}</p>
                </div>
            </div>
        </>
    );
};

export default MovieCard;
