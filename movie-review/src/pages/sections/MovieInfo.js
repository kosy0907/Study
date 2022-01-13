import React from "react";

export default function MovieInfo(props) {
    const { movie, detail } = props;

    // console.log(movie);
    // console.log(detail);

    return (
        <div>
            {/* {movie.title}
            {movie.vote_average} */}

            <div>
                {detail.name}
            </div>
        </div>
    )
}