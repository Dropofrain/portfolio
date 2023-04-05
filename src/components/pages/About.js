import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import Navbar from "../layout/Navbar";
import image from "../image/woman123.jpg";
import ProgressBar from 'react-bootstrap/ProgressBar';
// import { Link } from "react-router-dom";
import { useRef } from 'react'

const About = () => {
  const myStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // const about = useRef("");
  return (
    <>
      {/* <Navbar /> */}

      <div className="about">
        <h1
          align="center"
          style={{ color: "rgb(83, 111, 36)", textDecoration: "underline" }} id="section-1"
        >
          About Me{" "}
        </h1>
        <div className="a_about ">
          <div className="column">
            <div style={myStyle}>
              <img src={image} alt="" width="80%" height="60%" />
            </div>
          </div>

          <div className="column">
            <div className="acontain" style={{ fontSize: 20 }}>
              <h2>
                <span style={{ color: "rgb(178, 139, 135)" }}>I'm</span> Barsha
              </h2>
              <p>
                Currently , I'm a Bachelor student of BCA (Bachelor of Computer
                Application) in Ratna Rajyalaxmi Campus, Pradarshani Marg,
                Kathmandu 2018 batch. I did the three project my college where i
                learn about the how can we work in group. I created two web base
                application where one of that React is used in front side and
                Express is in backend side and Mongo dB is used for database.
                Building and testing applications for android. Skilled with C
                programming, C++, Java JavaScript and MERN Stack.
              </p>
            </div>
          </div>
        </div>

        <div className="abox">
          <div className="gra">
            <p>Name :</p>
            <h3> Barsha Singh</h3>
          </div>
          <div className="clo">
            <p>Email :</p>
            <h3>barshasingh075@gmail.com</h3>
          </div>
          <div>
            <p>Date of birth :</p>
            <h3>2057/05/27</h3>
          </div>
          <div>
            <p>From :</p>
            <h3>Kathmandu, Nepal</h3>
          </div>
        </div>
      </div>

      <div className="askill " style={{  marginLeft:"90px" }}>
        <h2  style={{ textAlign: "left" }}>My Skills</h2>
        <div className="skill-container">
          <div className="left" style={{alignItems:'left'}}>
            <div className="label" style={{justifyContent:"space-between"}}>
              <label style={{marginRight:"75%"}}>HTML/CSS </label><span className="l-span">75</span>
            </div>
            <div className="progress-bar">
              <ProgressBar  style={{width:"480px", height:"10px", border: "1px solid #bea7a7" , margin:"5px 0 7px 0"}} variant="danger" now={75} />
            </div>
            <div className="label" style={{justifyContent:"space-between"}}>
              <label style={{marginRight:"75%"}}>Web Design</label><span className="l-span">50</span>
            </div>
            <div className="progress-bar" style={{color:"yellow"}}>
            <ProgressBar  style={{width:"480px", height:"10px", border: "1px solid #bea7a7", margin:"5px 0 7px 0"}} variant="danger" now={50} />
            </div>

            <div className="label" style={{justifyContent:"space-between"}}>
              <label style={{marginRight:"75%"}}>Bootstrap</label><span className="l-span">70</span>
            </div>
            <div className="progress-bar">
            <ProgressBar  style={{width:"480px", height:"10px", border: "1px solid #bea7a7", margin:"5px 0 7px 0" }} variant="danger" now={70} />
            </div>

          </div>

          <div className="right">
            <div className="label" style={{justifyContent:"space-between"}}>
              <label style={{marginRight:"75%"}}>JavaScript</label><span className="l-span">50</span>
            </div>
            <div className="progress-bar">
            <ProgressBar  style={{width:"480px", height:"10px", border: "1px solid #bea7a7", margin:"5px 0 7px 0" }} variant="danger" now={50} />
            </div>
            <div className="label" style={{justifyContent:"space-between"}}>
              <label style={{marginRight:"75%"}}>React JS</label><span className="l-span">40</span>
            </div>
            <div className="progress-bar">
            <ProgressBar  style={{width:"480px", height:"10px", border: "1px solid #bea7a7", margin:"5px 0 7px 0" }} variant="danger" now={40} />
            </div>
            <div className="label" style={{justifyContent:"space-between"}}>
              <label style={{marginRight:"75%"}}>Node js</label><span className="l-span">25</span>
            </div>
            <div className="progress-bar">
            <ProgressBar  style={{width:"480px", height:"10px", border: "1px solid #bea7a7", margin:"5px 0 7px 0" }} variant="danger" now={25} />
            </div>
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </>
  );
};
export default About;
