import React from "react";
import Movie from "./Movie";

export default function Home(props) {
    const { movies } = props;
    return (
        <div className="container">
            {movies.map((movie) => (
                <Movie key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
}