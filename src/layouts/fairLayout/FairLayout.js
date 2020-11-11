import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import Footer from './footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

MainLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

