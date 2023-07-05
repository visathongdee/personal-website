import React from "react";
import "../style.css";
import { Button, theme, Anchor } from "antd";
// import { useNavigate } from "react-router-dom";
import Landing from "./sections/landing";
import AboutMe from "./sections/aboutMe";
import Experience from "./sections/experience.tsx";
import Projects from "./sections/projects.tsx";
import Contact from "./sections/contact.tsx";

const { useToken } = theme;

export default function Home() {
  const { token } = useToken();

  const items = [
    {
      key: "aboutMe",
      href: "#aboutMe",
      title: "About Me",
    },
    {
      key: "experience",
      href: "#experience",
      title: "Experience",
    },
    {
      key: "projects",
      href: "#projects",
      title: "Projects",
    },
    {
      key: "contact",
      href: "#contact",
      title: "Contact",
    },
  ];

  return (
    <div>
      <Anchor direction="horizontal" items={items} className="anchor" />
      <Landing />
      <div id="aboutMe">
        <AboutMe />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
