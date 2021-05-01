import React from "react";
import photo from "../../../images/lock.png";
import { Image } from "react-bootstrap";


const MiddleContainer = () => {
  return (
    <div
      className="bg-dark text-secondary text-center"
      style={{ margin: "auto" }}
      id="features"
    >
      <div className="bg-dark text-secondary container  px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6 p-5">
            <img
              src={photo}
              className="d-block mx-lg-auto img-fluid"
              alt="Photo1"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 text-left">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-white">
              Responsive left-aligned hero with image
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Action 1
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Action 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContainer;
