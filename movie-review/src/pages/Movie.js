import React from "react";
import StarRatings from 'react-star-ratings';

export default function Movie(props) {
    const { movie } = props;
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w300/'
    return (
        <div key={movie.id} className="movieData">
            <img src={imgBaseUrl + movie.poster_path} alt="movie-img" className="movie_img" />
            <div className="movie_content">
                <span className="movie_title">{movie.title}</span>
                <StarRatings
                    rating={movie.vote_average / 2}
                    numberOfStars={5}
                    starDimension="30px"
                    starSpacing="5px"
                />
                <button className="detailBtn">view more &gt;&gt;</button>
            </div>
        </div>
    );
}