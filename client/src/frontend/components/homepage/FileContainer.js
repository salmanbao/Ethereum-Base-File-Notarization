import React from "react";
import Fade from "react-reveal/Fade";

const FileContainer = () => {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <Fade>
          <h1 className="display-5 fw-bold text-white">Title</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <div>
                <label htmlFor="formFileLg" className="form-label">
                  Upload Your File!
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default FileContainer;
