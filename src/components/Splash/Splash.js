import React from "react";
import styled from "styled-components";
import variables from "../../styles/variables";

const Splash = () => {
  return (
    <SplashContainer>
      <LogoIcon src="/images/logo_white.png" />
    </SplashContainer>
  );
};

export default Splash;

const SplashContainer = styled.div`
  ${variables.position("absolute", 0, null, null, 0)}
  ${variables.flex("column", "center", "center")}
  ${variables.widthHeight("100%", "100vh")}
  z-index: 100;
`;

const LogoIcon = styled.img`
  width: 44px;
`;
