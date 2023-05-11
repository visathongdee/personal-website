import React from "react";
import "../../style.css";
import { theme, Card } from "antd";
import {
  BsFillCircleFill,
  BsChevronRight,
  BsFillFolderFill,
} from "react-icons/bs";
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

  // const children = [child];
  const child = (
    <div>
      <h1>The Data Mine: Corporate Partners - Merck</h1>
    </div>
  );

  const { TabPane } = Tabs;

  const items = [
    {
      key: "1",
      label: "Genesys",
      children: child,
    },
    {
      key: "2",
      label: "The Data Mine",
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: "Purdue IT",
      children: `Content of Tab Pane 3`,
    },
    {
      key: "4",
      label: "Corporate Partners - Merck",
      children: `Content of Tab Pane 3`,
      className: "last-tab",
    },
  ];

  const CustomTab = ({ label }) => (
    <span className="tab-label">
      <BsFillFolderFill className="folderIcon" />{" "}
      <div style={{ color: "white" }}>{label}</div>
    </span>
  );

  const MyTabs = () => {
    return (
      <Tabs defaultActiveKey="1" tabPosition="left">
        {items.map((item) => (
          <TabPane
            key={item.key}
            tab={<CustomTab label={item.label} />}
            className={item.className}
          >
            {item.children}
          </TabPane>
        ))}
      </Tabs>
    );
  };

  return (
    <div className="parent">
      <div className="container">
        <Card
          title={aboutMeTitle}
          style={{ textAlign: "left" }}
          bodyStyle={{ padding: "0", margin: "0" }}
        >
          {/* <Tabs
            className="tabs-titles"
            defaultActiveKey="1"
            tabPosition="left"
            items={items}
            onChange={onChange}
          /> */}
          <MyTabs />
        </Card>
      </div>
    </div>
  );
}
