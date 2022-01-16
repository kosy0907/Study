import React from "react";
import Movie from "./Movie";
import NavBar from "./section/NavBar";

export default function Home(props) {
    const { movies } = props;

    return (
        <>
            <NavBar />
            <div className="content">
                <div className="popular_movie">
                    <div className="content_title">Popular Movie</div>
                    <div className="movie_container">
                        {movies.map((movie) => (
                            <Movie key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}