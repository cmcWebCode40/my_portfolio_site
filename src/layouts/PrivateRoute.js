import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => {
  const cookies = new Cookies();
  const token = cookies.get('JWT', { path: '/' });

  return (
    <Route
      {...rest}
      render={(props) => (token
        ? (
          <Layout>
            <Component {...props} />
          </Layout>
        )
        : (
          <Redirect to={{
            pathname: '/login',
            state: props.location
          }}
          />
        )
      )}
    />
  );
};

export default PrivateRoute;
