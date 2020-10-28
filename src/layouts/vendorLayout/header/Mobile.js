import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Row = styled.nav.attrs({
  className: 'row'
})`
  display:none;
  @media ${(props) => props.theme.mediaQueries.medium} {
    display:flex;
  }
  .nav-link{
    display:block;
    color:'red';
  }
`;

const Mobile = () => {
  return (
    <Row>
      <div className="col">
        <h2>
          {' '}
          Coop
          {' '}
          <strong>LAG</strong>
        </h2>
      </div>
      <div className="col">

        <a className="nav-link" href="##">
          Cart
          <FontAwesomeIcon icon={['fa', 'shopping-cart']} color="#555" />
        </a>
      </div>
    </Row>
  );
};

export default Mobile;
