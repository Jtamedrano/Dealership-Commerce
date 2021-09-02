import React from "react";
import { Carousel } from "react-bootstrap";

interface Props {}

const Jumbotron = (props: Props) => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel__content">
          <p>Monday Chavrolet Sales Event</p>
        </div>
        <Carousel.Caption>
          <h3>Car Deal #1</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel__content">
          <p>You Trade, You Save</p>
        </div>
        <Carousel.Caption>
          <h3>Car Deal #2</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Jumbotron;
