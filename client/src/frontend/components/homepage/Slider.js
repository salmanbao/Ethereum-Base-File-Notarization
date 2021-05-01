import React from "react";
import caroImage from "../../../images/caro21.png";
import caroImage2 from "../../../images/caro2.jpg";
import "../../css/carousel.css";

const Slider = () => {
  return (
    <div>
      <div
        id="home"
        className="carousel slide carousel-fade"
        data-ride="carousel"
        style={{ marginTop: "100px" }}
      >
        <ol className="carousel-indicators">
          <li data-target="#home" data-slide-to={0} className="active" />
          <li data-target="#home" data-slide-to={1} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="first-slide" src={caroImage} alt="First slide" />
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>Example headline.</h1>
                <p>
                  Include you photo here (1920 x 900), egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus. Nullam id dolor
                  id.
                </p>
                <p>
                  <a
                    className="btn btn-lg btn-dark"
                    href="#action"
                    role="button"
                  >
                    Action 1
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="second-slide" src={caroImage2} alt="Second slide" />
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Include you photo here (1920 x 900), dapibus ac facilisis in,
                  egestas eget quam. Donec id elit non mi porta gravida at eget
                  metus.
                </p>
                <p>
                  <a
                    className="btn btn-lg btn-dark"
                    href="#action"
                    role="button"
                  >
                    Action 2
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#home"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#home"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
