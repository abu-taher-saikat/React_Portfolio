import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import SectionHeader from "./SectionHeader";

const exps = [
  {
    position: " Senior Architect",
    duration: "2015 - Present | Google",
    details:
      "Collaborate with creative and development teams on the execution of ideas.",
  },
  {
    position: "Front-end Developer",
    duration: "2013 - 2015 | Facebook Inc.",
    details:
      "Collaborate with creative and development teams on the execution of ideas.",
  },
  {
    position: "UI Developer ",
    duration: "2011 - 2013 | Envato.",
    details:
      "Collaborate with creative and development teams on the execution of ideas.",
  },
];
const educations = [
  {
    position: "Master in Arts",
    duration: "2006-2008",
    details:
      "Collaborate with creative and development teams on the execution of ideas.",
  },
  {
    position: "Art University",
    duration: "2006-2008",
    details:
      "Collaborate with creative and development teams on the execution of ideas.",
  },
  {
    position: "UI Developer ",
    duration: "2011 - 2013 | Envato.",
    details:
      "Collaborate with creative and development teams on the execution of ideas.",
  },
];

function Experience() {
  return (
    <div className="container" style={{ marginBottom: "150px" }}>
      <SectionHeader title="MY RESUME" sectionHead="MY EXPERTISES" />

      {/* /resume  */}
      <div className="row mt-5 for_responsive">
        <div className="col-6 col_for_responsive">
          <h5 className="exr-title">My Experience</h5>
          {exps.map((exp) => (
            <div
              style={{ height: "200px", width: "100%" }}
              className="p-4 expCard"
            >
              <h6 className="position">{exp.position}</h6>
              <button className="duration mt-3">{exp.duration}</button>
              <p className="details pt-4 ">{exp.details}</p>
            </div>
          ))}
          <h5 className="exr-title">Design Skills</h5>
          <div style={{ width: "100%" }} className="p-4 expCard">
            <p>Graphic Design</p>
            <ProgressBar
              labelSize="10px"
              completed={60}
              bgColor="#ff8282"
              height="15px"
              isLabelVisible="true"
              baseBgColor="#e2dfdf"
            />
            <br />
            <p>Logo Design</p>
            <ProgressBar
              labelSize="10px"
              completed={40}
              bgColor="#ff8282"
              height="15px"
              isLabelVisible="true"
              baseBgColor="#e2dfdf"
            />
            <br />
            <p>Photoshop & Figma</p>
            <ProgressBar
              labelSize="10px"
              completed={70}
              bgColor="#ff8282"
              height="15px"
              isLabelVisible="true"
              baseBgColor="#e2dfdf"
            />
            <br />
          </div>
        </div>
        <div className="col-6">
          <h5 className="exr-title">My Education</h5>
          {educations.map((education) => (
            <div
              style={{ height: "200px", width: "100%" }}
              className="p-4 expCard"
            >
              <h6 className="position">{education.position}</h6>
              <button className="duration mt-3">{education.duration}</button>
              <p className="details pt-4 ">{education.details}</p>
            </div>
          ))}
          <h5 className="exr-title">Design Skills</h5>
          <div style={{ width: "100%" }} className="p-4 expCard">
            <p>Jekyll</p>
            <ProgressBar
              labelSize="10px"
              completed={90}
              bgColor="#ff8282"
              height="15px"
              isLabelVisible="true"
              baseBgColor="#e2dfdf"
            />
            <br />
            <p>Javascript</p>
            <ProgressBar
              labelSize="10px"
              completed={85}
              bgColor="#ff8282"
              height="15px"
              isLabelVisible="true"
              baseBgColor="#e2dfdf"
            />
            <br />
            <p>Bootstrap</p>
            <ProgressBar
              labelSize="10px"
              completed={95}
              bgColor="#ff8282"
              height="15px"
              isLabelVisible="true"
              baseBgColor="#e2dfdf"
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
