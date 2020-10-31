import React from 'react';
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledDiv>
      <footer>&copy; virtual fair 2020 Footer</footer>
    </StyledDiv>
  )
};

export default Footer;

const StyledDiv = styled.div`
  text-align: center;
`;
