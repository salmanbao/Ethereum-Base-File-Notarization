import React from "react";
import PackageContainer from "../components/homepage/PackageContainer";
import DescriptionContainer from "../components/homepage/DescriptionContainer";


const Pricing = () => {
  return (
    <div id="pricing">
      <DescriptionContainer
        heading={"Small startup? Big company? We`ve got a plan."}
      />
      <div className="album py-5 bg-light">
        <div className="container">
          <div class="row">
            <div class="col-sm">
              <PackageContainer />
            </div>
            <div class="col-sm">
              <PackageContainer />
            </div>
            <div class="col-sm">
              <PackageContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
