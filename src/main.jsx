import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./styles/global.scss";

import Router from "./router";

import "@fontsource-variable/montserrat";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
