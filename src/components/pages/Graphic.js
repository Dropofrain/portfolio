import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import image from "../image/woman.jpg";

const Graphic = () => {
  const myStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };


  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  return (
    <>
     <Link
          to="/services"
           >
          <button style={{ marginLeft:"10px", marginTop:"10px", color:"white", backgroundColor:"rgb(151, 184, 39)", borderRadius:"12px",  width:"50px" , border:"none", fontSize:"30px" }} onClick={goBack}><BsArrowLeft/></button>
        </Link>
      <h1 align="center" style={{ color: "rgb(83, 111, 36)",textDecoration:"underline" }}>
        Graphic
      </h1>
      <div className="grap">
        <div className="columns">
          <div className="images" style={myStyle}>
            <img src={image} alt="" width="85%" />
          </div>
        </div>

        <div className="gcontain">
          <div className="columns">
            <div style={{ fontSize: 20 }}>
              <h2>
                <span style={{ color: "rgb(83, 111, 36)" }}>I'm</span> a Graphic Design 
              </h2>
              <p>
                Currently , I'm a Bachelor student of BCA (Bachelor of Computer
                Application).Graphic design is a craft where professionals
                create visual content to communicate messages. By applying
                visual hierarchy and page layout techniques, designers use
                typography and pictures to meet users' specific needs and focus
                on the logic of displaying elements in interactive designs, to
                optimize the user experience.
              </p>
           
              
              <div className="stable">
              <h4 style={{marginBottom:'0px'}}>Project Details:</h4>
                <table>
                  <tr>
                    <th>Client:</th>
                    <td>Ruby clinton</td>
                  </tr>
                  <tr>
                    <th>Technologies:</th>
                    <td> HTML, CSS3, React</td>
                  </tr>
                  <tr>
                    <th>Industry:</th>
                    <td>Art & Design </td>
                  </tr>
                  <tr>
                    <th>Date:</th>
                    <td>July 16, 2019</td>
                  </tr>
                   <tr>
                    <th> URL:</th>
                    <td>www.example.com</td>
                  </tr>
                </table>
              </div>
              {/* <div>
                <h5>Project</h5>
                <div></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graphic;
