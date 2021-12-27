import { Button } from 'react-bootstrap';

export default function Cart(props) {
    const { cartItems, onAdd } = props;
    return (
        <aside className='block col-1'>
            <h2>Cart Items</h2>
            <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className='row'>
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <Button variant="outline-primary" onClick={() => onAdd(item)} className="add">+</Button>
                        {/* <Button variant="outline-danger" onClick={() => onRemove(item)} className="remove">-</Button>{' '} */}
                    </div>
                </div>
            ))}
        </aside>
    );
};