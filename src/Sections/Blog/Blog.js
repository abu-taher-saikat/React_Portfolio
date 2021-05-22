import React, { Fragment,useState } from "react";
import "./Blog.css";
import ProjectData from "./BlogData.js";

const Blog = (props) => {
  const [BlogData, setBlogData] = useState(ProjectData);

  const projectFilterItem = (name) => {
    const arrProject = ProjectData.filter((p) => p.girls.includes(name));
    setBlogData(arrProject);
  };
  return (
    <>
      <div className="blog_heading">
        <p>blog</p>
        <h2>My Article</h2>
      </div>

      <div className="project_nav">
      <div
          className="project_item"
          onClick={() => projectFilterItem("all")}
        >
          All
        </div>
        <div
          className="project_item"
          onClick={() => projectFilterItem("beautiful")}
        >
          beautiful
        </div>
       
        <div
          className="project_item"
          onClick={() => projectFilterItem("wonderful")}
        >
          wonderful
        </div>
        <div
          className="project_item"
          onClick={() => projectFilterItem("nice")}
        >
          nice
        </div>
      </div>

      <div className="wrapper">
        {BlogData.map((data) => (
          <div className="card">
            <img src={data.image} alt="" />
            <div className="info">
              <h1>{data.heading}</h1>
              <p>{data.para}</p>
            </div>
            {/* <div class="blog-list">
              <p>The single greatest gift to get your</p>
              <span class="d-block text-center mt-3 font-weight-bold blog-cat">
                Travel
              </span>
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
