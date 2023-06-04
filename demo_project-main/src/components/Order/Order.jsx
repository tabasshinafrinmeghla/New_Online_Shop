/* eslint-disable no-unused-vars */
import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Order = () => {

  const products =useLoaderData();
  console.log(products)

  return (
    <div className='shop-container'>
      <div className='products_container'>
        <h2>Order pages:{products.length} </h2>
      </div>
      <div className='card_container'>
        <Cart cart={[]}></Cart>
      </div>
    </div>
  );
};

export default Order;