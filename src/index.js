import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header";
import Footer from "./components/footer";
import { theme } from "./theme";
import Playground from "./routes/playground";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="playground" element={<Playground />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  </BrowserRouter>
);

reportWebVitals();
