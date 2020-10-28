import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './header/Header';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

const MainWrapper = styled.div`
  background-color:${(props) => props.theme.colors.light};
  @media ${(props) => props.theme.mediaQueries.medium} {
    background-color:${(props) => props.theme.colors.whiteColor};
  }
`;

const VendorLayout = ({ children }) => {
  return (
    <MainWrapper>
      <Header />
      <main>
        {children}
        <Navbar />
      </main>
      <Footer />
    </MainWrapper>
  );
};

VendorLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default VendorLayout;
