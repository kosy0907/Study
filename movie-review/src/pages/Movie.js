import React from "react";

export default function Movie(props) {
    const { movie } = props;
    return (
        <div key={movie.id} className="movieData">
            <img src={movie.medium_cover_image} />
            <h4>{movie.title}</h4>
            <p>Rating: {movie.rating}</p>
            <p>{movie.summary}</p>
        </div>
    );
}