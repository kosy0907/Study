import React from "react";
import { Figure } from "react-bootstrap";

export default function ActorFigure(props) {
    const { detail } = props;
    const profileImgUrl = 'https://image.tmdb.org/t/p/original';
    return (
        <>
            <Figure>
                <Figure.Image
                    width={131}
                    height={140}
                    alt={detail[0].name}
                    src={profileImgUrl + detail[0].profile_path}
                />
                <Figure.Caption>
                    {detail[0].name}: {detail[0].character}
                </Figure.Caption>
            </Figure>

            <Figure>
                <Figure.Image
                    width={131}
                    height={140}
                    alt={detail[1].name}
                    src={profileImgUrl + detail[1].profile_path}
                />
                <Figure.Caption>
                    {detail[1].name}: {detail[1].character}
                </Figure.Caption>
            </Figure>

            <Figure>
                <Figure.Image
                    width={131}
                    height={140}
                    alt={detail[2].name}
                    src={profileImgUrl + detail[2].profile_path}
                />
                <Figure.Caption>
                    {detail[2].name}: {detail[2].character}
                </Figure.Caption>
            </Figure>

            <Figure>
                <Figure.Image
                    width={131}
                    height={140}
                    alt={detail[3].name}
                    src={profileImgUrl + detail[3].profile_path}
                />
                <Figure.Caption>
                    {detail[3].name}: {detail[3].character}
                </Figure.Caption>
            </Figure>
        </>
    )
}