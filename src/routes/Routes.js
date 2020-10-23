import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Loader from '../components/Loaders/Loader';
import ScrollToTop from '../components/scrolltop/ScrollToTop';
import Layouts from '../layouts/Layouts';
import { routesList } from './routesList';

const Routes = () => {
  return (
    <Router>
      <ScrollToTop>
        <Suspense fallback={<Loader />}>
          <Switch>
            {
            routesList.map((({ layout, path, component }) => (
              <Layouts
                exact
                path={path}
                key={path}
                layout={layout}
                component={component}
              />
            )))
          }
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default Routes;
