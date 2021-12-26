import { Button, Card } from 'react-bootstrap';
import React from 'react';

export default function Product(props) {
    const { product } = props;
    return (
        <Card>
            <Card.Body>
                <Card.Img variant="top" src={product.image} />
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.price}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    );
};