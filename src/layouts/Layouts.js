import React, { lazy, Suspense, useContext } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Home from "../components/home/Home";
import Logo from "../components/logo/Logo";
import SideNav from "../shared/sidenav/SideNav";
import Footer from "../shared/footer/Footer";
import Hamburger from "../shared/hamburger/Hamburger";
import { Context } from "../shared/contextApi/Context";


const About = lazy(() => import("../components/about/About"));
const Projects = lazy(() => import("../components/projects/Project"));
const Contact = lazy(() => import("../components/contact/Contact"));
const ProjectDetails = lazy(() => import("../components/projects/ProjectDetails"));

const Layouts = () => {
  const [opened, setIsOpened] = useContext(Context);
  const collapseAll = () => {
    if (opened) {
      return;
    } else {
      setIsOpened(!opened);
    }
  };

  return (
    <div className="container" onClick={collapseAll}>
      <Router>
        <Hamburger />
        <div className="layouts">
          <div>
            <div className="header">
              <Logo />
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
              <Route path="/project-details/:id" exact component={ProjectDetails} />
            </Suspense>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Layouts;
