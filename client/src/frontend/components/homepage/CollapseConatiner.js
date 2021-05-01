import React, { useEffect, useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const CollapseConatiner = (props) => {
  const [collapseId, setCollapseId] = useState("");

  useEffect(() => {
    setCollapseId(props.itemId);
  });
  return (
    <Fade>
      <div
        className="accordion py-1"
        id="accordionExample"
        style={{ margin: "auto", width: "70%" }}
      >
        <div>
          <div
            className="card-header"
            id="headingOne"
            style={{ backgroundColor: "#343a40", cursor: "pointer" }}
            data-toggle="collapse"
            data-target={"#collapseOne" + collapseId}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h5 className="p-1 mt-3">
              <p className="text-white">
                {props.question}
                <i
                  className="fa fa-angle-down text-bold float-right"
                  style={{ fontSize: "150%" }}
                ></i>
              </p>
            </h5>
          </div>
          <div
            id={"collapseOne" + collapseId}
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <p className="p-3">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CollapseConatiner;
