import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../components/home/Home";
import Logo from "../components/logo/Logo";
import SideNav from "../shared/sidenav/SideNav";
import Hamburger from "../shared/hamburger/Hamburger";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import Projects from "../components/projects/ProjectList";
import Footer from "../shared/footer/Footer";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/projects", name: "Projects", Component: Projects },
  { path: "/contact", name: "Contact", Component: Contact }
];

const Layouts = () => {
  return (
    <div className="layouts">
      <div className="header">
        <Logo />
        <Hamburger />
      </div>
      <SideNav />
      <Router>
        {routes.map(({ path, Component, name }) => (
          <Switch>
            <Route key={name} path={path} exact>
              {/*({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames="page"
                unmountOnExit
              >
                <div>
                  <Component />
                </div>
              </CSSTransition>
            )*/}
              <div>
                <Component />
              </div>
            </Route>
          </Switch>
        ))}
      </Router>
      <Footer />
    </div>
  );
};

export default Layouts;
