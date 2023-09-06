import React from "react";
import "../../style.css";
import { Card } from "antd";
import {
  BsFillCircleFill,
  BsChevronRight,
  BsFillFolderFill,
} from "react-icons/bs";
import { Tabs } from "antd";

// const { useToken } = theme;

interface ExperienceEntry {
  title: string;
  place: string;
  date: string;
  bullets: string[];
}

export default function Experience() {
  // const { token } = useToken();
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

  const genesysEntry: ExperienceEntry = {
    title: "Software Engineering Intern",
    place: "@ Genesys",
    date: "May 2023 - Aug 2023",
    bullets: [
      "Developed and implemented user-friendly UI enhancements using Typescript, improving website usability.",
      "Streamlined the efficiency of an AWS function, resulting in improved system performance.",
      "Designed and implemented a comprehensive developer dashboard by integrating various APIs, providing a centralized view of critical developer data.",
    ],
  };

  const dataMineEntry: ExperienceEntry = {
    title: "Undergraduate Teaching Assistant",
    place: "@ The Data Mine",
    date: "Aug 2022 - May 2023",
    bullets: [
      "Establish grading guidelines and grade projects of over 800 students of the STAT 19000 course.",
      "Aid students with questions and issues regarding weekly projects involving Python and R done on Jupyter Notebook.",
    ],
  };

  const itapEntry: ExperienceEntry = {
    title: "Technology Coordinator",
    place: "@ Purdue IT",
    date: "Aug 2021 - May 2023",
    bullets: [
      "Ensure technological devices in classrooms around campus are working and in good condition for class use.",
      "Supervise multiple ITaP computer labs including the opening and closings of the labs.",
      "Maintain constant communication with head office and coworkers through Microsoft Teams.",
      "Advised students and professors with issues regarding technological issues, printing, Purdue's authentication system, student software, etc.",
    ],
  };

  const merckEntry: ExperienceEntry = {
    title: "Undergraduate Data Science Researcher",
    place: "@ The Data Mine: Corporate Partners - Merck",
    date: "Aug 2021 - May 2022",
    bullets: [
      "Developed a user-friendly website using React and the MERN stack, enabling scientists to create, modify, and execute experiments utilizing biometric data from Garmin smartwatches and voice recognition technology.",
      "Designed and implemented a web application with Flask and SQL, empowering scientists to efficiently monitor and evaluate patient biometric data.",
    ],
  };

  const getExperienceEntry = (entry: ExperienceEntry) => {
    return (
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
            <h2 className="exp-title">{entry.title}</h2>
            <h2 className="exp-title-pink">{entry.place}</h2>
          </div>
          <p className="exp-title-secondary">{entry.date}</p>
        </div>

        {entry.bullets.map((bullet) => (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <BsChevronRight className="exp-bullet" />
            <div className="exp-bullet-text">{bullet}</div>
          </div>
        ))}
      </div>
    );
  };

  const { TabPane } = Tabs;

  const items = [
    {
      key: "1",
      label: "Genesys",
      children: getExperienceEntry(genesysEntry),
    },
    {
      key: "2",
      label: "The Data Mine",
      children: getExperienceEntry(dataMineEntry),
    },
    {
      key: "3",
      label: "Purdue IT",
      children: getExperienceEntry(itapEntry),
    },
    {
      key: "4",
      label: "Merck",
      children: getExperienceEntry(merckEntry),
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
          minHeight: "500px",
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
          className="browserCard"
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
