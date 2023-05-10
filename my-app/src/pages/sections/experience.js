import React from "react";
import "../../style.css";
import { theme, Card } from "antd";
import { BsFillCircleFill, BsChevronRight } from "react-icons/bs";
import { Radio, Tabs } from "antd";
// import { useNavigate } from "react-router-dom";

const { useToken } = theme;

export default function Experience() {
  const { token } = useToken();
  const aboutMeTitle = (
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
        Experience
      </div>
    </div>
  );

  const techs = ["JavaScript", "Firebase", "Java", "ReactJS", "SQL", "C/C++"];
  const techDiv = [];
  for (let tech of techs) {
    techDiv.push(
      <div className="gridItem">
        <BsChevronRight className="bullet" />
        {tech}
      </div>
    );
  }

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Genesys",
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: "The Data Mine Purdue",
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: "Purdue IT",
      children: `Content of Tab Pane 3`,
    },
    {
      key: "4",
      label: "The Data Mine: Corporate Partners",
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <div className="parent">
      <div className="container">
        <Card title={aboutMeTitle} style={{ textAlign: "left" }}>
          <Tabs
            defaultActiveKey="1"
            tabPosition="left"
            items={items}
            onChange={onChange}
          />
        </Card>
      </div>
    </div>
  );
}
