import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Loader from '../components/Loaders/Loader';
import Layouts from '../layouts/Layouts';
import PrivateRoute from '../layouts/PrivateRoute';
import { privateRoutes, routesList, VENDOR_ROUTES } from './routesList';

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          {routesList.map(({ layout, path, component }) => (
            <Layouts
              exact
              path={path}
              key={path}
              layout={layout}
              component={component}
            />
          ))}
          {VENDOR_ROUTES.map(({ layout, path, component }) => (
            <Layouts
              exact
              path={path}
              key={path}
              layout={layout}
              component={component}
            />
          ))}
          {privateRoutes.map(({ layout, path, component }) => (
            <PrivateRoute
              exact
              path={path}
              key={path}
              layout={layout}
              component={component}
            />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
