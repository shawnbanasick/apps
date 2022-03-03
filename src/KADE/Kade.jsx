import React from "react";
import image1 from "../assets/KADE-card-group.png";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const Kade = () => {
  return (
    <>
      <img className="image__img" src={image1} alt="Kade" />
      <div className="image__overlay image__overlay--primary">
        <div className="image__title">KADE</div>
        <p className="image__description">
          Desktop Q-Sort Analysis Software <br />
          for Research
        </p>
        <LinkBar>
          <a
            className="App-link"
            href="https://github.com/shawnbanasick/kade"
            target="_blank"
            rel="noopener noreferrer"
          >
            Description and Downloads
          </a>
        </LinkBar>
      </div>
    </>
  );
};

export default Kade;

const LinkBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 2vw;
  margin-top: 0.25em;
  color: black;
  width: 85%; ;
`;
