import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/main.scss";
import Index from "./components/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} exact />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
