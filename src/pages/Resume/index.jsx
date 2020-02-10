import React from "react";
import Category from "../../components/Category";
import Area from "../../components/Area";
import { Tech } from "../../DB";

// const techModel = [
//   {
//     title: "타이틀 1",
//     contents: [
//       {
//         subTitle: "서브 타이틀1",
//         subContents: ["서브 컨텐츠 1"]
//       }
//     ]
//   },
//   {
//     title: "타이틀 2",
//     contents: [
//       {
//         subTitle: "서브 타이틀2",
//         subContents: ["서브 타이틀2"]
//       }
//     ]
//   }
// ];

const Resume = () => {
  const createTechAreaElements = () => {
    return (
      <Area title="기술">
        {Tech.map((category, index) => {
          return (
            <Category
              title={category.title}
              contents={category.contents}
              key={index}
            />
          );
        })}
      </Area>
    );
  };

  return <div>{createTechAreaElements()}</div>;
};

export default Resume;
