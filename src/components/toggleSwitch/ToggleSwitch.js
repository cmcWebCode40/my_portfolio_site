import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selected, toggleSelected } = this.props;
    return (
      <StyledDiv>
        <div className="toggle-container" onClick={toggleSelected}>
          <div className={`dialog-button ${selected ? '' : 'disabled'}`}>
            {selected ? 'YES' : 'NO'}
          </div>
        </div>
      </StyledDiv>
    );
  }
}

ToggleSwitch.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired,
};

export default ToggleSwitch;

const StyledDiv = styled.div`
  .toggle-container {
    width: 70px;
    background-color: #c4c4c4;
    cursor: pointer;
    user-select: none;
    border-radius: 3px;
    padding: 2px;
    height: 32px;
    position: relative;
  }

  .dialog-button {
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    cursor: pointer;
    background-color: #002b49;
    color: white;
    padding: 8px 12px;
    border-radius: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    min-width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    min-width: unset;
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 34px;
    transition: all 0.3s ease;
  }

  .disabled {
    background-color: #707070;
    left: 2px;
  }
`;
