import { Button } from 'react-bootstrap';
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <aside className='block col-1 cart'>
            <h2>Cart Items</h2>

            <div>{cartItems.length === 0 &&
                <div className="row">
                    <div className="col-2">
                        <strong>Total Price</strong>
                    </div>
                    <div className="col-1 text-right">
                        <strong>&#8361; 0</strong>
                    </div>
                </div>
            }
            </div>

            {cartItems.map((item) => (
                <div key={item.id} className='row'>
                    <div className="col-2 cart-item-name">{item.name}</div>
                    <div className="col-2">
                        <Button variant="outline-danger" onClick={() => onRemove(item)} className="remove">
                            <FiMinus />
                        </Button>
                        <Button variant="outline-primary" onClick={() => onAdd(item)} className="add">
                            <FiPlus />
                        </Button>
                        {item.qty} x &#8361; {item.price}</div>
                </div>
            ))}

            {cartItems.length !== 0 && (
                <>
                    <hr></hr>

                    <div className="row">
                        <div className="col-2">
                            <strong>Total Price</strong>
                        </div>
                        <div className="col-1 text-right">
                            <strong>&#8361; {itemsPrice}</strong>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <Button variant="outline-primary">Buy</Button>
                    </div>
                </>
            )}

        </aside>
    );
};