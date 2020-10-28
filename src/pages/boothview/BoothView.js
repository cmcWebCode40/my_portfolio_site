import React from 'react';
import styled from 'styled-components';
import Feeds from '../../components/vendorshop/feeds/Feeds';
import HotDeals from '../../components/vendorshop/hotdeals/HotDeals';
import BoothTabs from './BoothTabs';

const BoothWrapper = styled.div`
  height:100vh;
  #mobile{
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
  ; 
`;

const BoothView = () => {
  return (
    <BoothWrapper>
      <div id="desktop" className="row m-4">
        <div className="col-8 mr-3 hotdeals">
          <div className="">
            <HotDeals />
          </div>
        </div>
        <div className="col-3 mx-1 py-1 mx-2 feeds">
          <h5 className="text-center font-weight-bold my-3 py-2">
            Hot Deals
          </h5>
          <Feeds />
        </div>
      </div>
      <div id="mobile">
        <BoothTabs />
      </div>
    </BoothWrapper>
  );
};

export default BoothView;
