import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import "./assets/scss/main.scss";
import "./app.css";
import Events from "./components/events/Events";
import Achievements from "./components/achievements/Achievements";
import Blogs from "./components/blogs/Blogs";
//import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="/contacts" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
