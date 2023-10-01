import React from "react";
import { Accordion } from "react-bootstrap";
import ActorFigure from "./ActorFigure";

export default function ActorInfo(props) {
    const { detail } = props;

    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Actor</Accordion.Header>
                    <Accordion.Body>
                        <ActorFigure detail={detail} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}