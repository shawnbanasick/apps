import React from "react";
import image3 from "../assets/EQ Web Sort card group.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const EqWebSort = () => {
  return (
    <>
      <img className="image__img" src={image3} alt="EQ Web Sort" />
      <div className="image__overlay image__overlay--primary">
        <div className="image__title">EQ Web Sort</div>
        <p className="image__description">Online Q-sorting</p>
        <LinkBar>
          <div>
            <Link to="/EqWebSort_Description">Description</Link>
          </div>{" "}
          <div>
            <Link to="/EqWebSort_Downloads">Downloads</Link>
          </div>
          <div>
            <Link to="/EqWebSort_UserManual">User Manual</Link>
          </div>
        </LinkBar>
      </div>
    </>
  );
};

export default EqWebSort;

const LinkBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2vw;
  margin-top: 0.25em;
  color: black;
  width: 85%; ;
`;
