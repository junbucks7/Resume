import React from "react";
import "./index.css";

const Category = ({ title, contents }) => {
  const createSubContentsElements = subContents => {
    return subContents.map((subContent, index) => {
      return (
        <section className="subContent" key={index}>
          <span>{subContent}</span>
        </section>
      );
    });
  };

  const createContentsElements = () => {
    return contents.map((sub, index) => {
      return (
        <section className="sub" key={index}>
          <p>{sub.subTitle}</p>
          {createSubContentsElements(sub.subContents)}
        </section>
      );
    });
  };

  return (
    <div>
      <div>
        <span className="title">{title}</span>
      </div>
      {createContentsElements()}
    </div>
  );
};

export default Category;
