import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { AiOutlineAntDesign } from "react-icons/ai";
import { GiSmartphone } from "react-icons/gi";
import { BsFlower1, BsPersonCheck, BsFillPencilFill, BsGraphUpArrow } from "react-icons/bs";

const Services = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="service">
        <h1 align="center" style={{ color: "rgb(83, 111, 36)",textDecoration:"underline", marginTop:"60px" }} id="section-2">
          My Achievements
        </h1>

        <div className="help "  style={{textAlign:"center"}} >
          <span style={{ color: "rgb(0, 0, 0)", backgroundColor:"rgb(151, 184, 39)",fontWeight:"bold", padding: "2px, 5px"}}>What I Do</span>

          <h1>How I can help your next project</h1>      

          <div className="s_box">
            <div className="gra">
            <Link  to ='/graphic' style={{textDecorationLine:"none"}}>
              <i>
                <BsFlower1 />
              </i>
              <br />
              <h4 style={{marginBottom:"-26px", marginTop:"-8px", color:"green"}}>Graphic Design</h4>
              <br />

              <p align="center" style={{color:"GrayText", paddingLeft:"2px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p> 
              </Link>
            </div>

            <div className="clo">
            <Link  to ='/webdesign' style={{textDecorationLine:"none"}}>
              <i>
                <AiOutlineAntDesign />
              </i>
              <br />
             <h4 style={{marginBottom:"-26px",marginTop:"-8px", color:"green"}}>Web Design</h4> 
              <br />
             
              <p align="center" style={{color:"GrayText", paddingLeft:"2px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p>  </Link>
            </div>


            <div>
            <Link  to ='/Graphic.js' style={{textDecorationLine:"none"}}>
              <i>
                <BsPersonCheck  />
              </i>
              <br />
              <h4 style={{marginBottom:"-26px",marginTop:"-8px", color:"green"}}>Programming Skill</h4>
              <br />
            
              <p align="center" style={{color:"GrayText", paddingLeft:"2px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p>  </Link>
            </div>

          </div>

          <div className="s_box">
            <div className="gra">
            <Link  to ='/Graphic.js' style={{textDecorationLine:"none"}}>
              <i>
                <BsFillPencilFill/>
              </i>
              <br />
              <h4 style={{marginBottom:"-26px",marginTop:"-8px", color:"green"}}>UI/UX Design</h4>
              <br />
              <p align="center" style={{color:"GrayText", paddingLeft:"2px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p> </Link>
            </div>
            <div className="clo">
            <Link  to ='/Graphic.js' style={{textDecorationLine:"none"}}>
              <i>
                <BsGraphUpArrow />
              </i>
              <br />
              <h4 style={{marginBottom:"-26px",marginTop:"-8px", color:"green"}}>Business Analysis</h4>
              <br />
              <p align="center" style={{color:"GrayText", paddingLeft:"2px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p> </Link>
            </div>
            <div>
            <Link  to ='/Graphic.js' style={{textDecorationLine:"none"}}>
              <i>
                <GiSmartphone />
              </i>
              <br />
              <h4 style={{marginBottom:"-26px",marginTop:"-8px", color:"green"}}>App Design & Develop</h4>
              <br />
              <p align="center" style={{color:"GrayText", paddingLeft:"2px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p> </Link>
            </div>
          </div>

        </div>
          
      </div>
      
    </>
  );
};

export default Services;
