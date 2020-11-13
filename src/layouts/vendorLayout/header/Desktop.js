import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Desktop = () => {
  return (
    <Row>
      <div className="col px-lg-5 py-lg-3 px-4 py-2 my-auto">
        <h2>
          Coop
          <strong>LAG</strong>
        </h2>
      </div>
      <div id="banner" className="col px-lg-5 py-lg-3 my-auto bg-primary text-white bold">
        <h2>Banners</h2>
      </div>
      <div id="cart" className="ml-auto my-auto">
        <a className="nav-link text-dark" href="#">
          <FontAwesomeIcon
            style={{ display: 'block' }}
            icon={['fa', 'shopping-cart']}
            color="#555"
          />
          Cart
        </a>
      </div>
    </Row>
  );
};

export default Desktop;

const Row = styled.nav.attrs({
  className: 'row',
})`
  .nav-link {
    display: block;
    color: 'red';
  }
  #cart {
    display: none;
    // float: right;
    position: relative;
    right: 0;
    margin: 0.3rem 0.6rem;
    color: ${(props) => props.theme.colors.whitColor};
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    display: flex;
    #cart {
      display: block;
    }
    #banner {
      display: none;
    }
  }
`;
