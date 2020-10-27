import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return (
    <StyledDiv>
      <div>
        <button type="button" className="btn primary-button">{props.label}</button>
      </div>
    </StyledDiv>
  );
};

export default Button;

const StyledDiv = styled.div`
.primary-button {
  color: white;
  background-color: var(--primary-color);
  width: 100%;
}
`;
