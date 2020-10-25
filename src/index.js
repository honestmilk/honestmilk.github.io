import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import "./assets/css/style.css";

import Index from "./content/Index";
import FAQC from "./content/FAQContainer";

ReactDOM.render(
  <HashRouter base="honest-milk">
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route path="/faq" exact render={props => <FAQC {...props}/>} />
      <Redirect to="/" />
    </Switch>
  </HashRouter>,
  // <div>
  //   Hey
  // </div>,
  document.getElementById("root")
);
