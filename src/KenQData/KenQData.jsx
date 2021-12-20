import React from "react";
import image5 from "../assets/Ken-Q Data card group.png";

const KenQData = () => {
  return (
    <>
      <img className="image__img" src={image5} alt="EQ Web Configurator" />
      <div className="image__overlay image__overlay--primary">
        <div className="image__title">Ken-Q Data</div>
        <p className="image__description">Online Data Conversion</p>
        <div className="image__description">
          {" "}
          <a
            className="App-link"
            href="https://shawnbanasick.github.io/ken-q-data/index.html#section1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </div>
      </div>
    </>
  );
};

export default KenQData;
