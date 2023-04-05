import React from "react";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="b_foot">
      <div className="b_footer">
     
          <i>
            <Link
              style={{ textDecoration: "none" ,color:"#ffffff"  }}
              to=""
            >
              {" "}
              <BsFacebook />
              &nbsp; 
            </Link>
          </i>{" "}
          &nbsp;
          <i>
            <Link
              style={{ textDecoration: "none", color:"#ffffff"  }}
              to="https://github.com/Dropofrain"
            >
              <BsGithub /> 
              &nbsp; 
            </Link>
          </i>{" "}
          &nbsp;
          <i>
            <Link
              style={{ textDecoration: "none" ,color:"#ffffff" }}
              to="https://www.linkedin.com/in/barsha-singh-43618b25a/details/education/"
            >
              <BsLinkedin />
              &nbsp; 
            </Link>
          </i>
          &nbsp;
          <i>
            <Link
              style={{ textDecoration: "none" ,color:"#ffffff" }}
              to="https://www.linkedin.com/in/barsha-singh-43618b25a/details/education/"
            >
              <BsTwitter />
              &nbsp; 
            </Link>
          </i>
      </div>
    </div>
     );
};
