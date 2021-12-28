import React from 'react';
import Item from './Item';

export default function Book(props) {
    const { books, onAdd, title } = props;

    return (
        <div className='container'>
            {books.map((book) => (
                <Item key={book.id} book={book} onAdd={onAdd}></Item>
            ))}
            <hr />
            <h2 style={{ fontweight: "900" }}>What I read</h2>

            {title.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
};