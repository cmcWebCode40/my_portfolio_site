import React from 'react';
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledDiv>
      <footer className="py-4">Powered by <span>FairSquare  &copy; 2020</span></footer>
    </StyledDiv>
  )
};

export default Footer;

const StyledDiv = styled.div`
  text-align: center;

  footer {
    background-color: var(--primary-color);
    color: white;
  }

  span {
    font-weight: 600;
  }
`;
