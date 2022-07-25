import React from "react";
import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header";
import Footer from "./components/footer";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Header />
    <App />
    <Footer />
  </ThemeProvider>
);

reportWebVitals();
