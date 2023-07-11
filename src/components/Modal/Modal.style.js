import styled from "styled-components";
import variables from "../../styles/variables";
import font from "../../styles/fontStyle";

export const Modal = styled.div`
  ${variables.flex("row", "center", "center")}
  ${variables.absoluteCenter}
  ${variables.widthHeight("90%", "100%")}
  white-space: nowrap;
  z-index: 100;
`;

export const ModalBackground = styled.div`
  ${variables.position("absolute", "0", "null", "null", "0")}
  ${variables.widthHeight("100vw", "100vh")}
  margin: calc(0px) -20px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(45px);
  overflow: hidden;
  z-index: -1;
`;

export const ModalContents = styled.div`
  ${variables.position("absolute", "null", "null", "100px", "null")}
  ${variables.widthHeight("100%", "259px")};
  padding: 15px 20px;
  background: ${({ theme }) => theme.style.white};
  border: 1px solid #e9e9e9;
  border-radius: 20px;
  box-shadow: 0px 8px 100px rgba(47, 47, 47, 0.08);

  @media (min-width: 769px) {
    ${variables.position("absolute", "null", "null", "85px", "null")}
  }
`;

export const ModalTitle = styled.h1`
  ${font.t2}
  margin-top: 20px;
`;

export const ModalCancelButton = styled.button`
  ${variables.position("fixed", "null", "40%", "40px", "null")}
  ${font.t7}
  background: none;
  border: none;
  z-index: 100;
  opacity: 40%;
  cursor: pointer;
`;
