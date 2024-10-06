// src/components/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            {item.name} - ${item.price.toFixed(2)}
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
