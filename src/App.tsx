import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MyPortfolio from "./pages/MyPortfolio";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import ReadOnMedium from "./pages/ReadOnMedium";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <React.Fragment>
      <Home />
      <div className="max-w-6xl mx-auto">
        <About />
        <MyPortfolio />
        <Services />
        <Resume />
        <ReadOnMedium />
        <Contact />
      </div>
      <div className=" bg-gray-100 mt-14">
        <Footer />
      </div>
    </React.Fragment>
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/about" element={<About />} />
    //   <Route path="/portfolio" element={<MyPortfolio />} />
    //   <Route path="/services" element={<Services />} />
    // </Routes>
  );
}

export default App;
