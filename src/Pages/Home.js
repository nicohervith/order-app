import Carousel from '../Components/Carousel'

import React from 'react'
import Acordeon from '../Components/Acordeon';
import logotipo from "../assets/Img/logotipo.jpg";


const Home = () => {
  return (
    <div>
      <Carousel />
          <div className="title">
              <img className="img-logo" src={logotipo} alt=""/>
              <h3>Hace tu pedido!</h3>
              <hr/>
          </div>
          <Acordeon/>
    </div>
  );
}

export default Home