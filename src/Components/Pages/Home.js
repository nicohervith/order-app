import HomeCarousel from "../carousel/Carousel";
import React from "react";
import Acordeon from '../acordeon/Acordeon';
import logotipo from "../../assets/Img/logotipo.jpg";
import CheckOutCart from "../Shoppingcart/CheckOutCart";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <HomeCarousel />
      <div className="title">
        <Link to="/shoppingcart">
          <CheckOutCart />
        </Link>
        <img className="img-logo" src={logotipo} alt="" />
      </div>
      <div className="subtitle">
        <h3>Hacé tu pedido!</h3>
        <hr />
      </div>
      <Acordeon />
    </div>
  );
};

export default Home