import React from "react";
import styled from "styled-components";

const KadeDescription = () => {
  return (
    <Container>
      <h2>Description:</h2>
    </Container>
  );
};

export default KadeDescription;

const Container = styled.div`
  color: black;
  width: 96%;
  height: calc(100vh - 100px);
`;
