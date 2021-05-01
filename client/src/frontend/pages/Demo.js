import React from "react";
import ImageCard from "../components/homepage/ImageCard";
import IconContainer from "../components/homepage/IconContainer";


const iconArray = [
  {
    iconName: "fa fa-file-text p-5",
    count: "100",
    description: "Files Registered",
  },
  {
    iconName: "fa fa-users p-5",
    count: "500",
    description: "Files Registered",
  },
  {
    iconName: "fa fa-server p-5",
    count: "750",
    description: "Files Registered",
  },
];

const Demo = () => {
  return (
    <div className="album py-5 bg-light" id="demo">
      <div className="container">
        <div class="row">
          {iconArray.map((item, id) => (
            <IconContainer iconName={item} itemId={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;
