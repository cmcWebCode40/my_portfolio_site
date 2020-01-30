import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../components/home/Home";
import Logo from "../components/logo/Logo";
import SideNav from "../shared/sidenav/SideNav";
import Hamburger from "../shared/hamburger/Hamburger";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import Projects from "../components/projects/Project";
import Footer from "../shared/footer/Footer";

const Layouts = () => {
  return (
    <Router>
      <div className="layouts">
        <div className="header">
          <Logo />
          <Hamburger />
        </div>
        <SideNav />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        <Footer />
      </div>
    </Router>
  );
};

export default Layouts;
