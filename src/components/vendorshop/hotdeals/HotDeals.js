import React from 'react';
import styled from 'styled-components';
import shellLogo from '../../../assets/images/shelllogo.png';
import ADImg from '../../../assets/images/adcarousel.PNG';

const HotDealsWrapper = styled.div`
  img {
    width: auto;
  }
  .image-2 {
    height: 20rem;
    border-radius: ${(props) => props.theme.styles.borderRadius};
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    .image-2 {
      height: 7rem;
    }
  }
`;

const HotDeals = ({ title }) => {
  return (
    <HotDealsWrapper>
      <div className="d-flex">
        <div className="mr- text-center">
          <img className="image-1" height="40" src={shellLogo} alt={title} />
          <p>Cooplag</p>
          <button type="button" className="btn btn-primary btn-sm">
            Visit Booth
          </button>
        </div>
        <div className="ml-5">
          <img className="image-2" src={ADImg} alt={title} />
        </div>
      </div>
    </HotDealsWrapper>
  );
};

export default HotDeals;
