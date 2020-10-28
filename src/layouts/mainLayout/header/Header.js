import React from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs({
  className: 'btn btn-primary'
})`color:${(props) => props.theme.colors.primary}`;

const Header = () => {
  return (
    <header>
<<<<<<< HEAD
      <span>CooLang</span>
      <Button>Help me oh</Button>
=======
      <span>CoopLag</span>
>>>>>>> 6728d170168d3146db3e8dc8f5d8ef0428be03e9
    </header>
  );
};

export default Header;
