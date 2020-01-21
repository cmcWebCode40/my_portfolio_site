import React from "react";
import Layouts from "./layouts/Layouts";

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
  faHeart
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
  faHeart
);

const App = () => {
  return (
    <div>
      <Layouts />
    </div>
  );
};

export default App;
