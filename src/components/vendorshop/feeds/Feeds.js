import React from 'react';
import styled from 'styled-components';
import shellLogo from '../../../assets/images/shelllogo.png';
import ADImg from '../../../assets/images/adcarousel.PNG';

const FeedsWrapper = styled.div`
  img{
    border-radius:${(props) => props.theme.styles.borderRadius}
  }
`;

const Feeds = ({ title }) => {
  return (
    <FeedsWrapper>
      <div className="d-flex">
        <div className="mx-2">
          <img height="40" src={shellLogo} alt={title} />
        </div>
        <div className="">
          <img height="100" src={ADImg} alt={title} />
        </div>
      </div>
    </FeedsWrapper>
  );
};

export default Feeds;
