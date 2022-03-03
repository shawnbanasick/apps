import React from "react";
import image2 from "../assets/Configurator card group.png";
// import { Link } from "react-router-dom";
import styled from "styled-components";

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
        <LinkBar>
          <a
            className="App-link"
            href="https://github.com/shawnbanasick/eq_web_configurator"
            target="_blank"
            rel="noopener noreferrer"
          >
            Description and Downloads
          </a>
        </LinkBar>
      </div>{" "}
    </>
  );
};

export default EqWebConfig;

const LinkBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 2vw;
  margin-top: 0.25em;
  color: black;
  width: 85%; ;
`;

/*
 <div>
  <Link to="/EqWebConfig_Description">Description</Link>
 </div>{" "}
*/
