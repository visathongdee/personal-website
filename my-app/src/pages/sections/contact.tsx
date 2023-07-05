import React from "react";
import "../../style.css";
import { theme, Card } from "antd";
import { BsFillCircleFill, BsGithub, BsLink, BsLinkedin } from "react-icons/bs";
import { Github, Linkedin } from "lucide-react";

const { useToken } = theme;

export default function Contact() {
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
        Contact Me
      </div>
    </div>
  );

  return (
    <div className="parent">
      <div className="container">
        <Card title={title} style={{ textAlign: "left" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <p>
              Get in touch with me to discuss any opportunities or ideas via
              email or social media
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "200px",
              }}
            >
              <div>
                <p className="contact-bold">Email</p>
                <p>visathongdee@gmail.com</p>
              </div>
              <div>
                <p className="contact-bold">Social Media</p>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "15px" }}
                >
                  <a href="https://github.com/visathongdee">
                    <Github className="contact-icon" />
                  </a>
                  <a href="https://linkedin.com/in/visathongdee">
                    <Linkedin className="contact-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
