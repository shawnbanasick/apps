import React from "react";
import image3 from "../assets/EQ Web Sort card group.png";

const EqWebSort = () => {
  return (
    <>
      <img className="image__img" src={image3} alt="EQ Web Sort" />
      <div className="image__overlay image__overlay--primary">
        <div className="image__title">EQ Web Sort</div>
        <p className="image__description">Online Q-sorting</p>
        <p className="image__description">
          Description -- Download -- User Manual
        </p>
      </div>
    </>
  );
};

export default EqWebSort;
