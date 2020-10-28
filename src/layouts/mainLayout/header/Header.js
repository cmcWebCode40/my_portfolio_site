import React from 'react';
import Navbar from '../../../components/landingpage/navbar';
import styled from 'styled-components';

const Button = styled.button.attrs({
  className: 'btn btn-primary'
})`color:${(props) => props.theme.colors.primary}`;


const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};

export default Header;
