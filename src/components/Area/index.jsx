import React from "react";
import "./index.css";

const Area = ({ children, title }) => {
  return (
    <section className="resume-container">
      <div className="resume-title-wrapper">
        <span className="resume-title">{title}</span>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Area;
