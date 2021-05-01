import React from "react";

const TopFooter = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-outline-light btn-lg px-4">
            Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
