import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import car from '../../assets/car.avif';
import gasballoon from '../../assets/gasballoon.avif';
import mountain from '../../assets/mountain.avif';

function CarouselComponent() {
  return(
    <Carousel>
      {/* Item 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Item 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gasballoon}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Item 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mountain}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;