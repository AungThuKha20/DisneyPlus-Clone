/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
