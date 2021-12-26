import React from 'react';
import Header from './component/Header';
import Item from './component/Item';
import Cart from './component/Cart';
import data from './data';

function App() {
  const { product } = data;
  return (
    <>
      <div className="App">
        <Header />
        <div className='row'>
          <Item products={product} />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;