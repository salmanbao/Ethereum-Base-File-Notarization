import React from "react";
import Fade from "react-reveal/Fade";

const ImageCard = () => {
  return (
    <Fade>
      <div className="col">
        <div className="card shadow-sm">
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height={225}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
          </svg>
          <div className="card-body">
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ImageCard;
