import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/main.scss";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
