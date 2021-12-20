import React from "react";
import image4 from "../assets/Ken-Q card group.png";

const KenQAnalysis = () => {
  return (
    <>
      <img className="image__img" src={image4} alt="Ken-Q Analysis" />
      <div className="image__overlay image__overlay--primary">
        <div className="image__title">Ken-Q Analysis</div>
        <p className="image__description">Online Q-Sort Analysis Software</p>
        <div className="image__description">
          {" "}
          <a
            className="App-link"
            href="https://shawnbanasick.github.io/ken-q-analysis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </div>
      </div>{" "}
    </>
  );
};

export default KenQAnalysis;
