import { Button, Card } from 'react-bootstrap';
import React from 'react';

export default function Product(props) {
    const { product, onAdd } = props;
    const productPrice = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return (
        <Card>
            <Card.Body>
                <Card.Img variant="top" src={product.image} />
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    &#8361; {productPrice}
                </Card.Text>
                <Button variant="success" onClick={() => onAdd(product)}>Add to cart</Button>
            </Card.Body>
        </Card>
    );
};