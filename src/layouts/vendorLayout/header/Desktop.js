import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Row = styled.nav.attrs({
  className: 'row'
})`
  .nav-link{
    display:block;
    color:'red';
  }
  #cart{
    display:none;
    float:right;
    position:relative;
    right:0;
    margin:.3rem .6rem;
    color: ${(props) => props.theme.colors.whitColor};
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    display:flex;
    #cart{
    display:block
  }
    #banner{
    display:none;
  }

  }
`;

const Desktop = () => {
  return (

    <Row>
      <div className="col p-2">
        <h2>
          {' '}
          Coop
          {' '}
          <strong>LAG</strong>

        </h2>
      </div>
      <div id="banner" className="col p-2 bg-primary text-white bold">
        <h2>Banners</h2>
      </div>
      <div id="cart" className="">
        <a className="nav-link text-dark" href="##">
          <FontAwesomeIcon style={{ display: 'block' }} icon={['fa', 'shopping-cart']} color="#555" />
          Carts
        </a>
      </div>
    </Row>

  );
};

export default Desktop;