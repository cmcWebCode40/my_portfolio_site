// ================================================================================
// Imports
import React from 'react';
import styled from 'styled-components';
import vendorImg from '../../assets/images/vendor-bg.jpg';
import VendorTabMobile from './VendorTabMobile';
import VendorShopTabs from './VendorShopTabs';

// ================================================================================
// JSX Function
const Vendor = () => {
  return (
    <MainWrapper>
      <div id="desktop" className="row">
        <div className="pl-5 pt-2">
          <iframe
            width="1024"
            height="640"
            allowfullscreen
            src="https://cdn.soft8soft.com/AROAJSY2GOEHMOFUVPIOE:83c599106f/applications/Cooplac_Recept/Cooplac_Recept.html"
          ></iframe>
        </div>
        <div className="ml-auto vendor-shop-tab-desktop mr-5">
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

// ================================================================================
// Styled components
const MainWrapper = styled.div`
  display: block;
  height: 100vh;
  background-color: '#333';
  width: 100%;
  overflow: hidden;
  background: url(${vendorImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  #mobile {
    display: none;
  }

  .vendor-shop-tab-desktop {
    width: 400px;
    min-height: 600px;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: flex;
    background-image: none;
    #mobile {
      display: block;
      width: 100%;
    }
    #desktop {
      display: none;
    }
  } ;
`;
