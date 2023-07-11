import React from "react";
import styled from "styled-components";

const AppLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AppLayout;

const Container = styled.div`
  color: ${(props) => props.theme.style.black};
`;
