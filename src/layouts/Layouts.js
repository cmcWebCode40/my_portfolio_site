import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../components/home/Home";
import Logo from "../components/logo/Logo";
import SideNav from "../shared/sidenav/SideNav";
import Hamburger from "../shared/hamburger/Hamburger";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import Footer from "../shared/footer/Footer";

// const routes = [
//   { path: "/", name: "Home", Component: Home },
//   { path: "/contact", name: "Contact", Component: Contact }
// ];

const Layouts = () => {
  return (
    <div className="layouts">
      <Logo />
      <Hamburger />
      <SideNav />
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/about-me" component={About} exact />
      </Router>
      <Footer />
    </div>
  );
};

// {routes.map(({ path, Component }) => (
//         <Route key="name" path={path} exact>
//           <Component />
//         </Route>
//       ))}

export default Layouts;
