import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Home from "../components/home/Home";
import Logo from "../components/logo/Logo";
import SideNav from "../shared/sidenav/SideNav";
import Hamburger from "../shared/hamburger/Hamburger";

import Footer from "../shared/footer/Footer";
const About = lazy(() => import("../components/about/About"));
const Projects = lazy(() => import("../components/projects/Project"));
const Contact = lazy(() => import("../components/contact/Contact"));

// const Loading = () => {
//   return (

//   );
// };

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
        <Suspense
          fallback={
            <div className="loader">
              <FontAwesomeIcon
                style={{ marginRight: "0.7rem" }}
                icon="spinner"
                size="3x"
                color="#e3c214"
                spin
              />
            </div>
          }
        >
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default Layouts;
