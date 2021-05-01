import React from "react";
import photo from "../../../images/lock.png";
import { Image } from "react-bootstrap";
import IconContainer from "./IconContainer";

const iconArray = [
  {
    iconName: "fa fa-bullseye p-5",
    count: "100",
    description:
      "Protect yourself with legally admissible evidence that is backed by industry leading SHA-256 cryptographic hashing standards.",
  },
  {
    iconName: "fa fa-laptop p-5",
    count: "500",
    description:
      "Protect yourself with legally admissible evidence that is backed by industry leading SHA-256 cryptographic hashing standards.",
  },
  {
    iconName: "fa fa-pencil p-5",
    count: "750",
    description:
      "Protect yourself with legally admissible evidence that is backed by industry leading SHA-256 cryptographic hashing standards.",
  },
];

const CardContainer = () => {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center" id="contact">
      <div className="container">
        <div className="row">
          {iconArray.map((item, id) => (
            <IconContainer iconName={item} itemId={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
