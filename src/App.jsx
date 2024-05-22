import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/main.scss";
import Index from "./components/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
