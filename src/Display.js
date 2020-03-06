import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-159629320-1");
  ReactGA.pageview("/");
  console.log("Tracking GA on Main Page");
}

function display() {
initializeReactGA();
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default display;
