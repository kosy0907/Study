import React from "react";
import { Button } from 'react-bootstrap';


export default function Item(props) {
    const { book, onAdd } = props;

    return (
        <div className="row">
            <div className='title'>{book.name}</div>
            <div className='writer'>{book.writer}</div>
            <Button variant="success" onClick={() => onAdd(book)}>Read!</Button>
        </div>
    );
};