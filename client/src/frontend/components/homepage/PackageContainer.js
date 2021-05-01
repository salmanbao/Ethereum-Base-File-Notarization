import React from "react";

import Fade from "react-reveal/Fade";


const PackageContainer = () => {
  return (
    <Fade>
      <div className="col text-center">
        <div className="card">
          <div class="card-header py-5">
            <h2 className="card-title text-bold">0.001 ONION</h2>
            <h5 className="card-title">1 FILE REGISTRATION</h5>
          </div>
          <div className="card-body">
            <p className="card-text text-muted">
              SHA-256 Cryptographic Hashing
            </p>
            <hr />
            <p className="card-text text-muted">Unlimited Customer Support</p>
            <hr />
            <p className="card-text text-muted">10,000 File Registration</p>
            <hr />
            <a href="#" className="btn btn-dark">
              Choose Plan
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default PackageContainer;
