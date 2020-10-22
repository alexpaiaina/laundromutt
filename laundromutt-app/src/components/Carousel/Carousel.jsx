import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class Carousel extends Component {
  render() {
    return (
      <Carousel infinite useKeyboardArrows autoPlay showThumbs={false}>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/carousel-img/carousel1.png`}
            className="carousel-img"
            alt="laundro1"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/carousel-img/carousel2.png`}
            className="carousel-img" 
            alt="landro2"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/carousel-img/carousel3.png`}
            className="carousel-img"
            alt="landro3"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/carousel-img/carousel4.png`}
            className="carousel-img"
            alt="landro4"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/carousel-img/carousel5.png`}
            className="carousel-img"
            alt="landro5"
          />
        </div>
      </Carousel>
    );
  }
}
