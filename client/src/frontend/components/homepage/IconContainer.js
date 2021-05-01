import React from "react";
import Fade from "react-reveal/Fade";


const IconContainer = (props) => {
  return (
    <Fade>
      <div className="col-sm text-center my-2">
        <div className="card">
          <div className="card-body">
            <i style={{ fontSize: "500%" }} class={props.iconName.iconName}></i>
            <p style={{ fontSize: "150%" }} className="font-weight-bold text-green">
              {props.iconName.count}
            </p>
            <p className="card-text text-muted mb-5">
              {props.iconName.description}
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default IconContainer;
