import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { theme } from "styles/variants";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
