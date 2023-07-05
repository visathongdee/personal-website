import React from "react";
import "../style.css";
import { Button, theme } from "antd";
// import { useNavigate } from "react-router-dom";
import Landing from "./sections/landing";
import AboutMe from "./sections/aboutMe";
import Experience from "./sections/experience.tsx";
import Projects from "./sections/projects.tsx";

const { useToken } = theme;

export default function Home() {
  const { token } = useToken();
  return (
    // <div className="centerComp">
    <div>
      <Landing />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}
