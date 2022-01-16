import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import NavBar from "./section/NavBar";
import ActorInfo from "./section/ActorInfo";
import InfoTable from "./section/InfoTable";

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
    })

    return (
        <div>
            {
                info &&
                <>
                    <NavBar />
                    <div className="detail">
                        <div className="detail_header">
                            <div className="header_poster">
                                <img src={imgBaseUrl + info.poster_path} alt="movie-img" className="movie_img" />
                            </div>

                            <div className="header_info">
                                <h3>{info.title}</h3>
                                <ul>
                                    <li>{info.genres[0].name}</li>
                                    <li>{info.genres[1].name}</li>
                                </ul>

                                <div className="header_overview">
                                    {info.overview}
                                </div>
                            </div>

                        </div>

                        <div className="detail_content">
                            <div className="detail_wrap">
                                <InfoTable info={info} />
                                <ActorInfo detail={detail} />
                            </div>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}