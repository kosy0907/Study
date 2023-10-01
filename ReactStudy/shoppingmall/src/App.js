import React, { useState } from 'react';
import Header from './component/Header';
import Item from './component/Item';
import Cart from './component/Cart';
import data from './data';

function App() {
  const { product } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    console.log(product.price);
    // 제품이 존재하는 지 확인
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


  return (
    <>
      <div className="App">
        <Header />
        <div className='row'>
          <Item onAdd={onAdd} products={product} />
          <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        </div>
      </div>
    </>
  );
}

export default App;