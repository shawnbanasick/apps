import React from "react";
import image1 from "../assets/KADE-card-group.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Kade = () => {
  return (
    <>
      <img className="image__img" src={image1} alt="Kade" />
      <div className="image__overlay image__overlay--primary">
        <div className="image__title">KADE</div>
        <p className="image__description">Desktop Q-Sort Analysis Software</p>
        <LinkBar>
          <div>
            <Link to="/Kade_Description">Description</Link>
          </div>{" "}
          <div>
            <Link to="/Kade_Downloads">Downloads</Link>
          </div>
          <div>
            <Link to="/Kade_UserManual">User Manual</Link>
          </div>
        </LinkBar>
      </div>
    </>
  );
};

export default Kade;

const LinkBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2vw;
  margin-top: 0.25em;
  color: black;
  width: 85%; ;
`;
