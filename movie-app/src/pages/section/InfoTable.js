import React from "react";
import { Table } from 'react-bootstrap';

export default function InfoTable(props) {
    const { info } = props;
    return (
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>Title</td>
                    <td>{info.original_title}</td>
                </tr>
                <tr>
                    <td>Release Date</td>
                    <td>{info.release_date}</td>
                </tr>
                <tr>
                    <td>Language</td>
                    <td>{info.original_language}</td>
                </tr>
                <tr>
                    <td>Run Time</td>
                    <td>{info.runtime}</td>
                </tr>
            </tbody>
        </Table>
    )
}