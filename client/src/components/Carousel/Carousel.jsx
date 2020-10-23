import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

export default function CarouselComponent() {
  return (
    <Link to="/dogs">
    <div className="carousel-wrapper">
      <Carousel infinite useKeyboardArrows autoPlay showThumbs={false}>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/carousel-img/establish.png`}
            className="carousel-img"
            alt="laundro1"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/carousel-img/hazel.jpg`}
            className="carousel-img" 
            alt="landro2"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/carousel-img/kali.jpg`}
            className="carousel-img"
            alt="landro3"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/carousel-img/kona.jpg`}
            className="carousel-img"
            alt="landro4"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/carousel-img/finn.jpg`}
            className="carousel-img"
            alt="landro5"
          />
        </div>
      </Carousel>
    </div>
    </Link>
  );
}

