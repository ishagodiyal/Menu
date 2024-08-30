import React, { useState, useEffect } from 'react';
import './Cart.css'
import Chicken from './chicken.jpg';
import noodles from './noodles.jpg';
import burger from './bg.jpg';
import pasta from './pasta.jpg';
import choco from './chocolate.jpg';
import fries from './fries.jpg';
import egg from './egg.jpg'
import meal from './meal.jpg'
import desi from './desi.jpg'


const imageMap = {
    1: choco,
    2:noodles,
    3:fries,
    4:pasta,
    5:desi,
    6:burger,
    7:Chicken,
    8:meal,
    9:egg
};

export default function Cart({ cart, setCart }) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    handlePrice();
    console.log(price);
  },[cart]);
    
  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => {
      console.log('Item',item);
      const itemPrice = parseFloat(item.price.replace('Rs','')) || 0;
      const itemAmount = parseInt(item.amount, 10) || 0;
      console.log(`Parsed Price: ${itemPrice}, Parsed Amount: ${itemAmount}`);
      ans += itemAmount * itemPrice;
    });
    setPrice(ans);
    console.log('Price recalculated:', ans);
  };

  
  


      const handleIncrease = (id)=> {
        const updatedCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        });
        setCart(updatedCart);
      }
    
      const handleDecrease=(id)=> {
        const updatedCart = cart.map((item) => {
          if (item.id === id && item.amount > 1) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        });
        setCart(updatedCart);
      }
    


  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cartimg">
            <img src={imageMap[item.id]} alt={item.name} className="cart_img" />
         
            <p>{item.name}</p>
          </div>
          <div>
          <button onClick={() => handleIncrease(item.id)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleDecrease(item.id)}>-</button>
          </div>
          <div>
          <span> {item.price} </span>
            <button onClick={() => {
              setCart(cart.filter(cartItem => cartItem.id !== item.id));
            }}>Remove</button>
          </div>
        </div>
         
      ))}
     <div className="total">
          <span>Total Price of your cart: </span>
          <span>Rs -{price.toFixed(2)}</span>
          </div>
    </article>
  );
}
