import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContextApi } from '../context/authContext';
import { getUserToken } from '../utils/functions/userAuth';

const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => {
  const { isUserAuth, } = useContext(authContextApi);
  const isLoggedIn = getUserToken();

  useEffect(() => {

  }, [isUserAuth]);

  return (
    <Route
      {...rest}
      render={(props) => (
        isLoggedIn
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
