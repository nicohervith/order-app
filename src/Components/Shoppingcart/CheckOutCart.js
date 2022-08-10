import React from 'react'
import cart from '../../assets/Img/cart.png'
import { Link } from "react-router-dom";

const CheckOutCart = () => {
  return (
    <div>
      
        <img className="cart-style" src={cart} alt="" />
      
    </div>
  );
}

export default CheckOutCart