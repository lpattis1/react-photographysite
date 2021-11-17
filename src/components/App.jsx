import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loading from "./Loading";
import Home from "./Home";
import Men from "./Men";
import Women from "./Women";
import Animals from "./Animals";
import Menu from "./Menu";
import Scenic from "./Scenic";
import Films from "./Films";
import About from "./About";
import Contact from "./Contact";
import Ads from "./Ads";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/scenic" element={<Scenic />} />
        <Route path="/films" element={<Films />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ads" element={<Ads />} />
      </Routes>
    </Router>
  );
};

export default App;
