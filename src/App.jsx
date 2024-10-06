// src/App.js
import React, { useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const products = [
    {
      "id": 1,
      "name": "Tesla Model S",
      "price": 79999,
      "image": "https://cdn.pixabay.com/photo/2017/05/23/23/12/tesla-1421978_1280.jpg"
    },
    {
      "id": 2,
      "name": "Ford Mustang",
      "price": 55999,
      "image": "https://cdn.pixabay.com/photo/2017/07/30/16/03/mustang-2464088_1280.jpg"
    },
    {
      "id": 3,
      "name": "Chevrolet Camaro",
      "price": 42999,
      "image": "https://cdn.pixabay.com/photo/2019/07/10/16/09/camaro-3437942_1280.jpg"
    },
    {
      "id": 4,
      "name": "BMW M3",
      "price": 70999,
      "image": "https://cdn.pixabay.com/photo/2015/09/22/16/14/bmw-957628_1280.jpg"
    },
    {
      "id": 5,
      "name": "Audi R8",
      "price": 142700,
      "image": "https://cdn.pixabay.com/photo/2016/01/29/00/32/audi-1165483_1280.jpg"
    }
  ]
  
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="App">
      <h1>My Shopping Cart</h1>
      <div className="products">
        {products.map((product) => (
          <Product 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
