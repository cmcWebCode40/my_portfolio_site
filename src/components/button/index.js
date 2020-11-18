import React from 'react';
import styled from 'styled-components';

const STYLES = ['btn-primary', 'btn-outline'];

const SIZES = ['btn-medium', 'btn-large'];

const Button = ({
  children,
  // type: buttonType,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <StyledDiv>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} m-1`}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    </StyledDiv>
  );
};

Button.defaultProp = {
  buttonType: 'button',
};

export default Button;

const StyledDiv = styled.div`
  .btn {
    padding: 8px 20px;
    margin-bottom: 20px;
    border-radius: 2px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 100%;
    max-width: 200px;
  }

  .btn--primary {
    background-color: var(--primary-color);
    color: var(--tint);
    border: 1px solid var(--primary-color);
  }

  .btn--outline {
    background-color: transparent;
    color: var(--primary-color);
    padding: 8px 20px;
    border: 1px solid var(--primary-color);
    transition: var(--transition);
  }

  .btn--medium {
    padding: 8px 20px;
    font-size: 20px;
  }

  .btn--medium:hover,
  .btn--large:hover {
    background: var(--primary-color);
    color: var(--tint);
    transition: var(--transition);
  }
`;
