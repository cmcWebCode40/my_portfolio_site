import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../mainLayout/header/Header';
import { AppBar } from './css/Styles';
import SideNavBar from './sideNav/SideNavBar';

const VendorDashboardLayout = ({ children }) => {
  const toggleModal = () => {
    const wrapper = document.querySelector('#wrapper');
    wrapper.classList.toggle('toggled');
  };

  return (
    <AppBar>
      <Header />
      <div id="wrapper">
        <SideNavBar />
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row mt-4">
              <div className="col-lg-12">
                <main className="mt-5">
                  <a
                    href="#menu-toggle"
                    onClick={toggleModal}
                    className="btn btn-default bars"
                    id="menu-toggle"
                  >
                    <FontAwesomeIcon size="1x" icon={['fa', 'bars']} />
                  </a>
                  {children}
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppBar>
  );
};

VendorDashboardLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default VendorDashboardLayout;
