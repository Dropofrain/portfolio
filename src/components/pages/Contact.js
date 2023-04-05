import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handle = () => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Subject", subject);
  };

  return (
    <>
      {/* <Navbar /> */}

      <div className="box-container" style={{ padding: "0,20px , 0 ,20px" }}>
        <div className="rows">
          <div className="column">
            <div style={{ padding: "30px" }}>
              <h1>Let's get in touch</h1>
              <p>
                I enjoy discussing new projects and design challengs. Please
                share as much info, as possible so we can get the most out of
                our first catch-up.
              </p>
              <h3>Living in :</h3>
              <p>Kathmandu, Nepal</p>
              <h3>Call:</h3>
              <p>(+01) 10876549</p>
              <div className="b_footer" style={{ marginLeft: "-11px" }}>
                <i>
                  <Link
                    style={{ textDecoration: "none", color: "Black" }}
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
                    style={{ textDecoration: "none", color: "black" }}
                    to="https://github.com/Dropofrain"
                  >
                    <BsGithub />
                    &nbsp;
                  </Link>
                </i>{" "}
                &nbsp;
                <i>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="https://www.linkedin.com/in/barsha-singh-43618b25a/details/education/"
                  >
                    <BsLinkedin />
                    &nbsp;
                  </Link>
                </i>
                &nbsp;
                <i>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="https://www.linkedin.com/in/barsha-singh-43618b25a/details/education/"
                  >
                    <BsTwitter />
                    &nbsp;
                  </Link>
                </i>
              </div>
            </div>
          </div>

          <div className="column">
            <div style={{ padding: "10px" }}>
              <h1 id="section-3">Estimate your Project?</h1>
              <div>
                {/* <h2 align="center"> Get in touch</h2> */}
                <form>
                  <label for="name"> Name </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name.."
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <br />
                  <label for="email"> Your Email Address </label>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <br />
                  {/* <label for="phone">Phone</label>
              <br />
              <input type="number" id="phone" name="phone" style={{scrollbars:"none"}} />
              <br /> */}
                  <label for="subject">How can I help you?</label>
                  <br />
                  <textarea
                    name="subject"
                    placeholder="Write something.."
                    required
                    onChange={(e) => setSubject(e.target.value)}
                  ></textarea>
                  <br />{" "}
                  <button type="submit" onClick={handle}>
                    Send message
                  </button>
                </form>
                {/* <Button as="input" type="submit" value="Submit" />{'Submit'} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
