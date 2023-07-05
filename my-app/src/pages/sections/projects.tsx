import React from "react";
import "../../style.css";
import { theme, Card } from "antd";
import { BsFillCircleFill, BsChevronRight } from "react-icons/bs";
import wanderPhoto from "../images/wanderMap.png";
import websitePhoto from "../images/websiteMock.png";

const { useToken } = theme;

export default function Projects() {
  const { token } = useToken();
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
        Projects
      </div>
    </div>
  );

  const getWebsiteSection = () => {
    return (
      <div style={{ display: "flex", margin: "30px", gap: "40px" }}>
        <div>
          <p className="proj-title">visathongdee.com</p>
          <p className="proj-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vestibulum, lectus in tincidunt consequat, tortor dolor faucibus
            urna, at posuere odio lorem at justo.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              color: "pink",
            }}
          >
            <p className="proj-tech-list">ReactJS</p>
            <p className="proj-tech-list">Ant Design</p>
          </div>
        </div>
        <div>
          <img src={websitePhoto} className="proj-photo" />
        </div>
      </div>
    );
  };

  const getWanderSection = () => {
    return (
      <div style={{ display: "flex", margin: "30px", gap: "40px" }}>
        <div>
          <img src={wanderPhoto} className="proj-photo" />
        </div>
        <div>
          <p className="proj-title">Wander</p>
          <p className="proj-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vestibulum, lectus in tincidunt consequat, tortor dolor faucibus
            urna, at posuere odio lorem at justo.
          </p>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                overflow: "wrap",
                gap: "15px",
                color: "pink",
              }}
            >
              <p className="proj-tech-list">ReactJS</p>
              <p className="proj-tech-list">Materials UI</p>
              <p className="proj-tech-list">Firebase</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                overflow: "wrap",
                gap: "15px",
                color: "pink",
              }}
            >
              <p className="proj-tech-list">Spotify API</p>
              <p className="proj-tech-list">Google Maps API</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="parent">
      <div className="container">
        <Card title={title} style={{ textAlign: "left" }}>
          <div>{getWebsiteSection()}</div>
          <hr className="line" />
          <div>{getWanderSection()}</div>
        </Card>
      </div>
    </div>
  );
}
