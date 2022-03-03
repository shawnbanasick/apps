import React from "react";
import image3 from "../assets/EQ Web Sort card group.png";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const EqWebSort = () => {
  return (
    <>
      <img className="image__img" src={image3} alt="EQ Web Sort" />
      <div className="image__overlay image__overlay--primary">
        <div className="image__title">EQ Web Sort</div>
        <p className="image__description">Online Q-sorting</p>
        <LinkBar>
          <a
            className="App-link"
            href="https://github.com/shawnbanasick/eq-web-sort"
            target="_blank"
            rel="noopener noreferrer"
          >
            Description and Download
          </a>
        </LinkBar>
      </div>
    </>
  );
};

export default EqWebSort;

const LinkBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 2vw;
  margin-top: 0.25em;
  color: black;
  width: 85%; ;
`;
