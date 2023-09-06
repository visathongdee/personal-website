import React from "react";
import "../style.css";
import { FloatButton, Anchor } from "antd";
import Landing from "./sections/landing";
import AboutMe from "./sections/aboutMe";
import Experience from "./sections/experience.tsx";
import Projects from "./sections/projects.tsx";
import Contact from "./sections/contact.tsx";

export default function Home() {

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
      <FloatButton.BackTop className="floatbutton"/>
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
