import React, { useCallback, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import image from "../image/img12.jpg";
import imgCar from "../image/img2.jpg";
import { IoMdClose } from "react-icons/io";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import ImageModal from "../modal/ImageModal";

const Webdesign = () => {
  const [openModal, setOpenModal] = useState(false);

  const myStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const showHandler = () => {
    setOpenModal(true);
  };

  const hideHandler = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div>
        <Link>
          <button
            style={{
              marginLeft: "10px",
              marginTop: "10px",
              color: "white",
              backgroundColor: "rgb(151, 184, 39)",
              borderRadius: "12px",
              width: "50px",
              border: "none",
              fontSize: "30px",
            }}
            onClick={goBack}
          >
            <BsArrowLeft />
          </button>
        </Link>
      </div>

      <h1
        align="center"
        style={{ color: "rgb(83, 111, 36)", textDecoration: "underline" }}
      >
        Web Designs
      </h1>

      <br />
      <div className="grapsw">
        <div className="column">
          <div className="images" style={myStyle} onClick={showHandler}>
            <img
              src={image}
              alt=""
              width="70%"
              height="90%"
              style={{ cursor: "pointer" }}
            />
            <ImageModal
              title="Online Art Gallery"
              show={openModal}
              onClick={hideHandler}
            >
              <img src={image} alt="" width="100%" height="100%" />
            </ImageModal>
          </div>
        </div>

        <div className="wcontain">
          <div className="column">
            <div style={{ fontSize: 20 }}>
              <h2>
                <span style={{ color: "rgb(83, 111, 36)" }}>Online </span> Art
                Gallery
              </h2>
              <p>
                Currently , I'm a Bachelor student of BCA (Bachelor of Computer
                Application).
              </p>

              <div className="stable">
                <h4 style={{ marginBottom: "0px" }}>Project Details:</h4>
                <table>
                  <tr>
                    <th>Client:</th>
                    <td style={{ textAlign: "left" }}>college Project</td>
                  </tr>
                  <tr>
                    <th>Technologies:</th>
                    <td> HTML, CSS3, React, Express</td>
                  </tr>
                  <tr>
                    <th>Industry:</th>
                    <td>Art & Design </td>
                  </tr>
                  <tr>
                    <th>Date:</th>
                    <td>July 16, 2022</td>
                  </tr>
                  <tr>
                    <th> URL:</th>
                    <td>www.example.com</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <IoMdClose onClick={handleClose} />  */}

      <br />

      <hr />
      <br />
      <div className="grapsw">
        <div className="column">
          <div className="images" style={myStyle}>
            <img src={imgCar} alt="" width="70%" height="600px" />
          </div>
        </div>

        <div className="wcontain">
          <div className="column">
            <div style={{ fontSize: 20 }}>
              <h2>
                <span style={{ color: "rgb(83, 111, 36)" }}>Online </span> Car
                Rental Service
              </h2>
              <p>
                Currently , I'm a Bachelor student of BCA (Bachelor of Computer
                Application).Graphic design is a craft where professionals
                create visual content to communicate messages.
              </p>

              <div className="stable">
                <h4 style={{ marginBottom: "0px" }}>Project Details:</h4>
                <table>
                  <tr>
                    <th>Client:</th>
                    <td>Online Customer</td>
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
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      {/* <div>
        <div className={model? "model open" : "model"}>
          <img src={tempimgSrc} />
           <IoMdClose onClick={() => setModel(false)} /> 
        </div>


        <div className="gallery">
          {data.map((item, index)=>{
            return(
          <div className="pics"  key={index} onClick={() => getImg(item.imgSrc)}>
            <img src={item.imgSrc} style={{width:'100%'}}/>
          </div>
          ) 
            })} 
        </div>
      </div>  */}

      {/* <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Online Art Gallery
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          <div className="images" style={{width:"200px", height:"200px"}} >
            <img src={image} alt="" style={{overflow:"scroll", width:"540px"}} />
          </div>
          </p>
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default Webdesign;
