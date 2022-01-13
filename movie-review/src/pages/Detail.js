import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import MovieInfo from "./sections/MovieInfo";

export default function Detail() {
    const { movieId } = useParams();

    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=de638f81d320c814bb662ea24353aa8d`
    const creditUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=de638f81d320c814bb662ea24353aa8d`

    const [info, setInfo] = useState();
    const [detail, setDetail] = useState([]);

    const getDetail = async () => {
        const movieDetail = await (await axios.get(creditUrl)).data.cast;
        setDetail([...movieDetail], []);
    }

    useEffect(() => {
        getDetail();

        fetch(movieUrl)
            .then(response => response.json())
            .then(response => {
                setInfo(response)
            })


        console.log(info);
        console.log(detail);
    })

    return (
        <div>
            This is {movieId}'s page

            <div>
                {/* movie Info */}
                <MovieInfo
                    movie={info}
                    detail={detail}
                />
            </div>

            <div>
                {/* actor Info */}
            </div>
        </div>
    )
}