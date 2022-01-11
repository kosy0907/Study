import React from "react";
import Movie from "./Movie";

export default function Home(props) {
    const { movies } = props;
    return (
        <div>
            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
}