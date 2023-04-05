import { useEffect, useState } from "react";
import React from "react";
import {  FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState();

  useEffect(() => {
    window.addEventListener('scroll', () =>{

        if (window.scrollY > 100) {
            setShowScrollTopButton(true);
          } else {
            setShowScrollTopButton(false);
          }

    });
   
  }, []);

  const scrollToSection = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div >
    {showScrollTopButton && <FaAngleDoubleUp  className="top-btn-position" onClick={scrollToSection}  />}
    </div>
  );
};

export default ScrollToTop;
