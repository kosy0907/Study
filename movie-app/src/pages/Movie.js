import React from "react";
import StarRatings from 'react-star-ratings';

export default function Movie(props) {
    const { movie } = props;
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w300/'
    return (
        <div key={movie.id} className="movieData">
            <a href={`movie/${movie.id}`}>
                <img src={imgBaseUrl + movie.poster_path} alt="movie-img" className="movie_img" />
            </a>
            <div className="movie_content">
                <span className="movie_title">{movie.title}</span>
                <StarRatings
                    rating={movie.vote_average / 2}
                    starRatedColor="lightgray"
                    starEmptyColor="black"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="5px"
                />
            </div>
        </div>
    );
}