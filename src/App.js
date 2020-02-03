import React from "react";
import Layouts from "./layouts/Layouts";
// import StateProvider from "./shared/contextApi/StateProvider";

import "./sass/styles.scss";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faHome,
  faProjectDiagram,
  faPhone,
  faBlog,
  faUser,
  faCode,
  faFileDownload,
  faDownload,
  faHeart,
  faHamburger,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faDownload,
  faHome,
  faProjectDiagram,
  faPhone,
  faFileDownload,
  faBlog,
  faUser,
  faCode,
  faHeart,
  faHamburger,
  faSpinner
);

const App = () => {
  return (
    <div>
      <Layouts />
    </div>
  );
};

export default App;
