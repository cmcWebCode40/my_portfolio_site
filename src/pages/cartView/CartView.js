import React from 'react';
import styled from 'styled-components';
import Cart from '../../components/vendorshop/carts/Cart';

const BoothWrapper = styled.div`
  height:100vh;
  /* #mobile{
    display:none;
  }
  .hotdeals{
    background:${(props) => props.theme.colors.whiteColor};
    padding:4rem 1rem ;
    border-radius:${(props) => props.theme.styles.borderRadius};
  }
  .feeds{
  background:${(props) => props.theme.colors.whiteColor};
  border-radius:${(props) => props.theme.styles.borderRadius};
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    #mobile{
    display:block
  };
    #desktop{
    display:none;
  }}
  ;  */
`;

const CartView = () => {
  return (
    <BoothWrapper>
      <Cart />
    </BoothWrapper>
  );
};

export default CartView;
