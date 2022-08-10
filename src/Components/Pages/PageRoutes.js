import { Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import ShoppingCart from "../Shoppingcart/ShoppingCart";
import CheckOutCart from "../Shoppingcart/CheckOutCart";

const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/checkoutcart" element={<CheckOutCart />} />
      </Routes>
    </div>
  );
}

export default PageRoutes