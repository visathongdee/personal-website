import React from "react";
import "../style.css";
import { FloatButton, Anchor, Affix } from "antd";
import Landing from "./sections/landing";
import AboutMe from "./sections/aboutMe";
import Experience from "./sections/experience.tsx";
import Projects from "./sections/projects.tsx";
import Contact from "./sections/contact.tsx";
import { Github, Linkedin, Mail } from "lucide-react";

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
      <FloatButton.BackTop className="floatButton" style={{ color: "red" }} />
      <Anchor direction="horizontal" affix="true" items={items} />
      <Affix offsetTop={150}>
        <div className="topSideline">
          <hr className="rightSidelineLine" />
          <a href="mailto:visathongdee@gmail.com">
            <Mail className="sideline-icon" />
          </a>
          <a href="https://github.com/visathongdee">
            <Github className="sideline-icon" />
          </a>
          <a href="https://linkedin.com/in/visathongdee">
            <Linkedin className="sideline-icon" />
          </a>
        </div>
      </Affix>
      <div>
        <Landing />
      </div>
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
      <Affix offsetBottom={200}>
        <div className="bottomSideline">
          <hr className="leftSidelineLine" />
          <p>visathongdee@gmail.com</p>
        </div>
      </Affix>
    </div>
  );
}
