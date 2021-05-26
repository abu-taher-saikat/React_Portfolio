import React,{useState, useEffect} from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaStackOverflow,
  FaDribbble,
} from "react-icons/fa";
// import {motion, useViewportScroll, useMotionValue } from 'framer-motion';





function AboutMe() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", ()=> {
      console.log('hi', window.scrollY);
      setScroll(window.scrollY < 25);
    })
      
    }, []);


    

  return (
    <div
    style={{ opacity : 1}}
    className={`container about about_me ${scroll ? "hideit" : "showit"} `}>
      <div
        style={{ width: "70%", margin: "0 auto" }}
        className="p-3 border row p3_style"
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
        <div className="col-md-7">
          <h3>About Me</h3>
          <p className="">
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
