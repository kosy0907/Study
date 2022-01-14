import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function Detail() {
    const { movieId } = useParams();

    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=de638f81d320c814bb662ea24353aa8d`
    const creditUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=de638f81d320c814bb662ea24353aa8d`
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w300/'

    const [info, setInfo] = useState();
    const [detail, setDetail] = useState([]);

    const getInfo = () => {
        fetch(movieUrl)
            .then(response => response.json())
            .then(response => {
                setInfo(response)
            })
    }
    const getDetail = async () => {
        const movieDetail = await (await axios.get(creditUrl)).data.cast;
        setDetail([...movieDetail], []);
    }

    useEffect(() => {
        getInfo();
        getDetail();
        console.log(detail);
    }, [])

    return (
        <div>
            {
                info &&
                <div>
                    <div className="detail_poster">
                        <img src={imgBaseUrl + info.poster_path} alt="movie-img" className="movie_img" />
                    </div>

                    <div className="detail_info">
                        <h3>{info.original_title}</h3>
                        <ul>
                            <li>{info.genres[0].name}</li>
                            <li>{info.genres[1].name}</li>
                        </ul>
                    </div>

                    <div className="detail_overview">
                        {info.overview}
                    </div>

                    <div>
                        <h3>Actor</h3>
                        <ul>
                            <li>{detail[0].name}: {detail[0].character}</li>
                            <li>{detail[1].name}: {detail[1].character}</li>
                            <li>{detail[2].name}: {detail[2].character}</li>
                            <li>{detail[3].name}: {detail[3].character}</li>
                            <li>{detail[4].name}: {detail[4].character}</li>
                        </ul>
                    </div>
                </div>
            }

            <div>
                {/* actor Info */}
            </div>
        </div>
    )
}