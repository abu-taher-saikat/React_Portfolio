import React from "react";

function SectionHeader({ title, sectionHead }) {
  return (
    <div>
      <div className="text-center slider mt-5 header">
        <p>{title ? title : "KIND WORDS"}</p>
        <h3>{sectionHead ? sectionHead : "TESTIMONIAL"}</h3>
        <span className="underlineSlider"></span>
      </div>
    </div>
  );
}

export default SectionHeader;
