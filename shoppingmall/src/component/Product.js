import { Button, Card } from 'react-bootstrap';
import React from 'react';

export default function Product(props) {
    const { product, onAdd } = props;
    return (
        <Card>
            <Card.Body>
                <Card.Img variant="top" src={product.image} />
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    id: {product.id}
                    <br />
                    {product.price}
                </Card.Text>
                <Button variant="outline-success" onClick={() => onAdd(product)}>Add to cart</Button>
            </Card.Body>
        </Card>
    );
};