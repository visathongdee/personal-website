import React from "react";
import "../../style.css";
import { Card } from "antd";
import { BsFillCircleFill, BsChevronRight } from "react-icons/bs";

export default function AboutMe() {
  const title = (
    <div style={{ display: "flex", marginTop: "5px", marginBottom: "5px" }}>
      <div
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginRight: "35px",
        }}
      >
        <BsFillCircleFill className="circleIcon" viewBox="-2 -5 20 20" />
        <BsFillCircleFill className="circleIcon" viewBox="-2 -5 20 20" />
        <BsFillCircleFill className="circleIcon" viewBox="-2 -5 20 20" />
      </div>
      <div
        style={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        About Me
      </div>
    </div>
  );

  const techs = [
    "TypeScript/JavaScript",
    "Firebase",
    "Java",
    "ReactJS",
    "SQL",
    "C/C++",
  ];
  const techDiv = [];
  for (let tech of techs) {
    techDiv.push(
      <div className="gridItem">
        <BsChevronRight className="bullet" />
        {tech}
      </div>
    );
  }

  return (
    <div className="parent">
      <div className="container">
        <Card title={title} className="browserCard">
          <p>
            I'm Visa Thongdee, a senior at Purdue University studying Computer
            Science with a concentration in Software Engineering and Machine
            Learning and an interest on Full Stack Web Development.
          </p>
          <p>
            In my academic journey, I've explored the dynamic world of computer
            science, from coding complex algorithms to crafting seamless user
            experiences. I've honed my skills with hands-on projects, covering
            everything from front-end design to back-end functionality.
          </p>
          <p>A few technologies I've been working with recently:</p>
          <div className="skillsGrid">{techDiv}</div>
        </Card>
      </div>
    </div>
  );
}
