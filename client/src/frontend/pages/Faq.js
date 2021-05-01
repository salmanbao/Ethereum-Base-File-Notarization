import React from "react";
import ImageCard from "../components/homepage/ImageCard";
import CollapseConatiner from "../components/homepage/CollapseConatiner";
import DescriptionContainer from "../components/homepage/DescriptionContainer";


const collapseArray = [
  {
    question: "01 Does DeepVault have any access to my documents?",
  },
  {
    question:
      "02 Is it possible to view the document contents using the hash imprint?",
  },
  {
    question:
      "03 When using the DeepVault service be able to prove its ownership?",
  },
];


const Faq = () => {
  return (
    <div id="faq">
      <DescriptionContainer
        heading={"View our frequently asked questions."}
        description={
          "Something short and leading about the collection below—its , but not too short so folks don’t simply skip over it entirely."
        }
      />
      <div className="album py-5 bg-light">
        <div className="container">
          {collapseArray.map((item, id) => (
            <CollapseConatiner question={item.question} itemId={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
