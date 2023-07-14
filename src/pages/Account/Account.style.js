import { Link } from "react-router-dom";

import styled from "styled-components";
import variables from "../../styles/variables";
import font from "../../styles/fontStyle";

export const Container = styled.div`
  ${variables.absoluteCenter}
  ${variables.flex("column", "center", "center")}
  ${variables.widthHeight("85%", "100vh")}
`;

export const LogoIcon = styled.img`
  width: 26px;
`;

export const LoginTitleContainer = styled.div`
  margin: 2em 0;
`;

export const LoginTitle = styled.h2`
  ${font.heading03}
  color: white;
  text-align: center;
`;

export const GoogleLoginButton = styled.button`
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100%", "56px")}
  background: white;
  border: none;
  border-radius: 48px;
  gap: 8px;
  cursor: pointer;
`;

export const GoogleLogoIcon = styled.img`
  width: 26px;
`;

export const GoogleLoginText = styled.span`
  ${font.bodyLargeSemiBold}
`;

export const LoginTermsText = styled.p`
  position: absolute;
  bottom: 10%;
  ${font.bodySmall}
  color: white;
  text-align: center;
  white-space: normal;
`;

export const LoginTermsLink = styled(Link)`
  color: ${({ theme }) => theme.style.secondaryBlue};
  text-decoration: none;
`;
