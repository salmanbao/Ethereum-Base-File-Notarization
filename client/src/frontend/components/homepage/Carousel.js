import React from "react";
import { Carousel, Button } from "react-bootstrap";
import caroImage from "../../../images/caro15.jpg";
import caroImage2 from "../../../images/caro16.jpg";
import photo from "../../../images/photo.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel
        fade
        /*       style={{ marginTop: "160px" }} */
        id="home"
      >
        <Carousel.Item>
          <img className="d-block w-100" src={caroImage} alt="First slide" />
          <Carousel.Caption>
            <h4>First slide label</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="light">SIGN UP NOW!</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={caroImage2} alt="Second slide" />

          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button variant="light">SIGN UP NOW!</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
