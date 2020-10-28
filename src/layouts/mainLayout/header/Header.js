import React from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs({
  className: 'btn btn-primary'
})`color:${(props) => props.theme.colors.primary}`;

const Header = () => {
  return (
    <header>
      <span>CoopLag</span>
    </header>
  );
};

export default Header;
