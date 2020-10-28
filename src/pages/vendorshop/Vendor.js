import React from 'react';
import styled from 'styled-components';
import vendorImg from '../../assets/images/vendor-bg.jpg';
import VendorTabMobile from './VendorTabMobile';
import VendorShopTabs from './VendorShopTabs';

const MainWrapper = styled.div`
  display:block;
  height:130vh;
  background-color:'#333';
  /* width:100%; */
  overflow:hidden;
  background:url(${vendorImg});
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  #mobile{
    display:none;
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    display:flex;
    background-image:none;
    #mobile{
    display:block
  };
    #desktop{
    display:none;
  }}
  ;
`;

const Vendor = () => {
  return (
    <MainWrapper>
      <div id="desktop" className="row">
        <div className="col col-md-8" />
        <div className="col-md-3">
          <VendorShopTabs />
        </div>
      </div>
      <div id="mobile">
        <VendorTabMobile />
      </div>
    </MainWrapper>
  );
};

export default Vendor;
