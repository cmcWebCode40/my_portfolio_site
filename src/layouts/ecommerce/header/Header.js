import React from 'react';
import { useSelector } from 'react-redux';
import Minicart from '../../../components/products/cart/minicart/Minicart';
import { Header as HeaderWrapper } from './css/header';
import NavBar from './NavBar';

const toggleModal = () => {
  const wrapper = document.querySelector('#wrapper');
  wrapper.classList.toggle('toggled');
};

const Header = () => {
  const cartItems = useSelector((state) => state.productCart).cart;
  return (
    <HeaderWrapper>
      <NavBar
        cartItems={cartItems}
        toggleModal={toggleModal}
      />
      <Minicart cartItems={cartItems} />
    </HeaderWrapper>
  );
};

export default Header;
