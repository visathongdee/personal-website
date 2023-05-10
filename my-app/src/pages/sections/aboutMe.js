import React from "react";
import "../../style.css";
import { theme, Card } from "antd";
import { RightOutlined, StarTwoTone } from "@ant-design/icons";
import { BsFillCircleFill } from "react-icons/bs";
// import { RightOutlined, MessageOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";

const { useToken } = theme;

export default function AboutMe() {
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
        About Me
      </div>
    </div>
  );
  return (
    <div className="parent">
      <div className="container">
        <Card title={aboutMeTitle} style={{ textAlign: "left" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vestibulum, lectus in tincidunt consequat, tortor dolor faucibus
            urna, at posuere odio lorem at justo. Quisque elementum ex at odio
            rutrum, et euismod lorem ornare. Ut suscipit lectus quis orci
            volutpat ornare. Nunc augue dui, cursus nec iaculis ut, commodo sed.
          </p>
          <p>A few technologies I’ve been working with recently:</p>
          <div className="skillsGrid">
            {/* <div className="gridItem">
              <RightOutlined style={{ width: "12px", color: "#FAA9BB" }} />
            </div> */}
            <div className="gridItem">
              <RightOutlined className="bullet" /> Javascript
            </div>
            <div className="gridItem">
              <RightOutlined className="bullet" />
              Firebase
            </div>
            <div className="gridItem">
              <RightOutlined className="bullet" />
              Java
            </div>
            <div className="gridItem">
              <RightOutlined className="bullet" />
              ReactJS
            </div>
            <div className="gridItem">
              <RightOutlined className="bullet" />
              SQL
            </div>
            <div className="gridItem">
              <RightOutlined style={{ width: "15px", color: token.darkPink }} />
              C/C++
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
