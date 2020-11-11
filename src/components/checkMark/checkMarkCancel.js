import React from 'react';
import styled from 'styled-components';

function CheckMarkSuccess() {
  return (
    <StyledDiv>
      <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </StyledDiv>
  )
}

export default CheckMarkSuccess;

const StyledDiv = styled.div`
svg {
  fill: red;
}

`