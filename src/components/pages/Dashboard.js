import React from "react";
import { Footer } from "../layout/Footer";
import Navbar from "../layout/Navbar";
import ScrollToTop from "../layout/ScrollToTop";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Carousels from "./Carousels";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dasboard">
      
      
          <Carousels/>
       
        
        <div className="container">
          <h1>
            {" "}
            Hello, I'm a{" "}
            <span style={{ color: "rgb(247, 248, 46)" }}>Web Developer</span>
            <p>living in Kathmandu, Nepal. </p>
          </h1>
          {/* <p>
            There! I'm a Front-End developer with experience in javascript and
            reactjs .
          </p>
          Currently based in webside developer. */}
        </div>
      </div>
      <About />
      <ScrollToTop />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Dashboard;
