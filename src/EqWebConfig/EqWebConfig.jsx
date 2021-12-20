import React from "react";
import image2 from "../assets/Configurator card group.png";

const EqWebConfig = () => {
  return (
    <>
      <img className="image__img" src={image2} alt="EQ Web Configurator" />
      <div className="image__overlay image__overlay--primary">
        <div className="image__title">EQ Web Configurator</div>
        <p className="image__description">
          Desktop Application for Setting Up an <br />
          EQ Web Sort Project
        </p>
        <p className="image__description">
          Description -- Download -- User Manual
        </p>
      </div>{" "}
    </>
  );
};

export default EqWebConfig;
