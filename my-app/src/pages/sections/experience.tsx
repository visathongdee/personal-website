import React from "react";
import "../../style.css";
import { theme, Card } from "antd";
import {
  BsFillCircleFill,
  BsChevronRight,
  BsFillFolderFill,
} from "react-icons/bs";
import { Radio, Tabs } from "antd";

const { useToken } = theme;

interface ExperienceEntry {
  title: string
  place: string
  date: string
  bullets: string[] 
}

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

  // const genesysEntry: ExperienceEntry {
  //   title: 
  // }

  const genesysBullets = [
    "Establish grading guidelines and grade projects of over 800 students of the STAT 19000 course.",
    "Aid students with questions and issues regarding weekly projects involving Python and R done on Jupyter Notebook.",
  ];

  // const children = [child];
  const child = (
    <div
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div>
        <div style={{ display: "flex", gap: "12px", margin: "0px" }}>
          <h2 className="exp-title">Software Engineering Intern</h2>
          <h2 className="exp-title-pink">@ Genesys</h2>
        </div>
        <p className="exp-title-secondary">May - Aug 2023</p>
      </div>

      {genesysBullets.map((bullet) => (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <BsChevronRight className="exp-bullet" />
          <div className="exp-bullet-text">{bullet}</div>
        </div>
      ))}
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
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        tabBarStyle={{
          minHeight: "400px",
          height: "auto",
        }}
      >
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
