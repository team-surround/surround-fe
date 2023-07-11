import React from "react";
import styled from "styled-components";
import variables from "../../styles/variables";

const Loading = () => {
  return <LoadingContainer>Loading...</LoadingContainer>;
};

export default Loading;

const LoadingContainer = styled.div`
  ${variables.position("absolute", 0, null, null, 0)}
  ${variables.widthHeight("100vw", "100vh")}
  background: url("") no-repeat;
  background-size: cover;
  white-space: nowrap;
  z-index: 1000;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "685px")}
  }
`;
