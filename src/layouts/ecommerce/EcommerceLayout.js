import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import Footer from './footer/Footer';

const EcommerceLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

EcommerceLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default EcommerceLayout;
