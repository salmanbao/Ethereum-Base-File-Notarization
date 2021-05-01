import React from 'react';

const DescriptionContainer = (props) => {
    return (
      <div className="album py-1 bg-light">
        <div className="row py-lg-5 text-center">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{props.heading}</h1>
            <p className="lead text-muted">{props.description}</p>
            {/* <p>
              <a href="/#" className="btn btn-primary mx-2">
                Action 1
              </a>
              <a href="/#" className="btn btn-primary mx-2">
                Action 2
              </a>
            </p> */}
          </div>
        </div>
      </div>
    );
}
 
export default DescriptionContainer;