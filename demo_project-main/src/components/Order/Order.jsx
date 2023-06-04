/* eslint-disable no-unused-vars */
import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Order = () => {

  const cart=useLoaderData();
  console.log(cart)

  return (
    <div className='shop-container'>
      <div className='products_container'>
        <h2>Order pages:{cart.length} </h2>
      </div>
      <div className='card_container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;