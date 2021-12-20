import React from "react";
import Kade from "../KADE/Kade";
import KenQAnalysis from "../KenQAnalysis/KenQAnalysis";
import EqWebSort from "../EqWebSort/EqWebSort";
import EqWebConfig from "../EqWebConfig/EqWebConfig";
import KenQData from "../KenQData/KenQData";
import styled from "styled-components";

// overlay effect - https://www.youtube.com/watch?v=exb2ab72Xhs
// overlay effect - https://codepen.io/dcode-software/pen/XWXVYgR

const ImageCards = () => {
  return (
    <ImageContainer>
      <div className="image">
        <Kade />
      </div>
      <div className="image">
        <KenQAnalysis />
      </div>
      <div className="image">
        <EqWebSort />
      </div>
      <div className="image">
        <EqWebConfig />
      </div>
      <div className="image">
        <KenQData />
      </div>
    </ImageContainer>
  );
};

export default ImageCards;

const ImageContainer = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.5rem;

  img {
    width: 45vw;
  }
`;
