import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaStackOverflow,
  FaDribbble,
} from "react-icons/fa";

function AboutMe() {
  return (
    <div style={{ marginTop: "30px" }} className="container about ">
      <div
        style={{ width: "70%", margin: "0 auto" }}
        className="p-3 border row"
      >
        <div className="col-md-5">
          <div className="img">
            <img
              className="image img-fluid"
              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA4fHxwcm9maWxlJTIwcGljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
        <div className=" col-md-7">
          <h3>About Me</h3>
          <p>
            Passionate designer & developer who loves simplicity in things and
            crafts beautiful user interfaces with love.
          </p>
          <div className="icons">
            <ul className="text-center list-unstyled">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaStackOverflow />
              </li>
              <li>
                <FaDribbble />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
