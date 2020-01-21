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
  faCode
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faProjectDiagram, faPhone, faBlog, faUser, faCode);

const App = () => {
  return (
    <div>
      <Layouts />
    </div>
  );
};

export default App;
