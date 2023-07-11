import React from "react";
import styled from "styled-components";
import variables from "../../styles/variables";

const Splash = ({ isSplashOpen, setIsSplashOpen }) => {
  return (
    <SplashContainer>
      <LogoIcon src="" />
    </SplashContainer>
  );
};

export default Splash;

const SplashContainer = styled.div`
  ${variables.position("absolute", 0, null, null, 0)}
  ${variables.flex("column", "center", "center")}
  ${variables.widthHeight("100vw", "100vh")}
  background-color: ${({ theme }) => theme.style.white};
  z-index: 100;
`;

const LogoIcon = styled.img`
  width: 180px;
`;
