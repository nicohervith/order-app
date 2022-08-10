import Carousel from "react-bootstrap/Carousel";
import hambur from '../../assets/Img/hambur.jpeg'
import pizza1 from "../../assets/Img/pizza1.jpg";
import papasfritas from "../../assets/Img/papasfritas.png";


const HomeCarousel = () => {
  return (
    <div>
      <Carousel className="carousel" fade>
        <Carousel.Item>
          <img className="d-block" src={hambur} alt="First slide" />
          <Carousel.Caption>{/*<h3>First slide label</h3>*/}</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={pizza1} alt="Second slide" />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={papasfritas} alt="Third slide" />

          <Carousel.Caption>{/*<h3>Third slide label</h3>*/}</Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
