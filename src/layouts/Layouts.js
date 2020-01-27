import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

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
          <Route key={name} exact path={path}>
            <div>
              <Component />
            </div>
          </Route>
        ))}
      </Router>
      <Footer />
    </div>
  );
};

// <Router>
// <Route path="/" component={Home} exact />
// <Route path="/contact" component={Contact} />
// <Route path="/about-me" component={About} />
// <Route path="/projects" component={Projects} />
// </Router>
// {routes.map(({ path, Component }) => (
//         <Route key="name" path={path} exact>
//           <Component />
//         </Route>
//       ))}

export default Layouts;
