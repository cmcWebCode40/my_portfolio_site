import React from 'react';
import PropTypes from 'prop-types';

const DashboardLayouts = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

DashboardLayouts.prototype = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayouts;
