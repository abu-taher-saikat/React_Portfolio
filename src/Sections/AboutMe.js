import React,{useState, useEffect} from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaStackOverflow,
  FaDribbble,
} from "react-icons/fa";
// import {motion, useViewportScroll, useMotionValue } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {motion} from 'framer-motion';
// ..
AOS.init();




function AboutMe() {
  // const [offset1, setOffset1] = useState(0);
  const [opacity, setOpacity] = useState(0);

  // const [name, setName] = useState("");

  // const [scroll, setScroll] = useState(0);


  useEffect(() => {
      // window.onscroll = () => {
      //   setOffset1(window.pageYOffset)
      // }
      // console.log(offset1)
      if (typeof window !== "undefined") {
        window.onscroll = () => {
          let currentScrollPos = window.pageYOffset;
          // console.log(`currentScrollPos`, currentScrollPos)
          // let maxScroll = document.body.scrollHeight - window.innerHeight;
          // let maxScroll = document.body.scrollIntoView();
          if(currentScrollPos > 0) {
            setOpacity(1)
          }else{
            setOpacity(0)
          }

          // if (currentScrollPos > 0 && currentScrollPos < maxScroll) {
          //   setOpacity({opacity : 1})
          //   // console.log(currentScrollPos)
          // } else {
          //   setOpacity({opacity : 0})
          // }
        }
      }
    }, [setOpacity]);


    

  return (
    <motion.div
      whileHover={{y : -200 }}
    data-aos="zoom-in-up"
    style={{ opacity : 1}}
    className={"container about your-class about_me"}>
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
    </motion.div>
  );
}

export default AboutMe;
