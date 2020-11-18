import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';

function ToggleSwitch({ rounded = false }) {
  const sliderCX = cx('slider', {
    rounded: rounded,
  });
  return (
    <StyledDiv>
      <label className="switch my-auto mx-2">
        <input type="checkbox" />
        <span className={sliderCX} />
      </label>
    </StyledDiv>
  );
}

export default ToggleSwitch;

const StyledDiv = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: #ccc;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.rounded {
    border-radius: 24px !important;
  }

  .slider.rounded:before {
    border-radius: 50%;
  }
`;