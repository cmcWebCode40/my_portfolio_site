import React from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs({
  className: 'btn btn-primary'
})`color:${(props) => props.theme.colors.primary}`;

const Header = () => {
  return (
    <header>
      <span>CooLang</span>
      <Button>Help me oh</Button>
    </header>
  );
};

export default Header;
