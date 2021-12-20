import React from "react";
import image1 from "../assets/KADE-card-group.png";

const Kade = () => {
  return (
    <>
      <img className="image__img" src={image1} alt="Kade" />
      <div className="image__overlay image__overlay--primary">
        <div className="image__title">KADE</div>
        <p className="image__description">Desktop Q-Sort Analysis Software</p>
        <p className="image__description">
          Description -- Downloads -- User Manual
        </p>
      </div>
    </>
  );
};

export default Kade;
