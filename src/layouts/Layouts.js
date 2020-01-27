import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gasp } from "gsap";

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
  const onEnter = node => {
    console.log(node);
  };
  const onExit = node => {
    console.log(node);
  };
  return (
    <div className="layouts">
      <div className="header">
        <Logo />
        <Hamburger />
      </div>
      <SideNav />
      <Router>
        {routes.map(({ path, Component, name }) => (
          <Route key={name} path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames="page"
                unmountOnExit
                onExit={onExit}
                onEnter={onEnter}
              >
                <div>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Router>
      <Footer />
    </div>
  );
};

export default Layouts;
