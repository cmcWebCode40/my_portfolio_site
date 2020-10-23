import React from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const LayoutsHH = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default LayoutsHH;
