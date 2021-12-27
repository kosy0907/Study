import React, { useState } from 'react';
import Header from './component/Header';
import Item from './component/Item';
import Cart from './component/Cart';
import data from './data';

function App() {
  const { product } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
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

  return (
    <>
      <div className="App">
        <Header />
        <div className='row'>
          <Item onAdd={onAdd} products={product} />
          <Cart onAdd={onAdd} cartItems={cartItems} />
        </div>
      </div>
    </>
  );
}

export default App;