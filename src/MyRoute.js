import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Graphic from "./components/pages/Graphic";
import Services from "./components/pages/Services";
import Webdesign from "./components/pages/Webdesign";
import TestCarousels from "./components/pages/TestCarousels";




export const MyRoute = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/graphic" element={<Graphic/>}/>
          <Route path="/webdesign" element={<Webdesign/>}/>
          <Route path="/test" element={<TestCarousels/>}/> 
          
        </Routes>
      </Router>
    </>
  );
};

export default MyRoute;
