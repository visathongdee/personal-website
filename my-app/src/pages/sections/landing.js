import React from "react";
import "../../style.css";
import { theme } from "antd";
// import { useNavigate } from "react-router-dom";

const { useToken } = theme;

export default function Landing() {
  const { token } = useToken();
  return (
    <div className="landing-parent">
      <div className="container">
        <h2 style={{ color: token.darkPink, margin: "0px", textAlign: "left" }}>
          Hello, my name is
        </h2>
        <h1 style={{ fontSize: "60px", margin: "0px", textAlign: "left" }}>
          test check alsdjaklasjdflkjsadf
        </h1>
        <h1 style={{ fontSize: "60px", margin: "0px", textAlign: "left" }}>
          Visa Theerapatra Thongdee
        </h1>
        <h2
          style={{
            color: token.primaryLight,
            margin: "0px",
            textAlign: "left",
          }}
        >
          I am a junior at Purdue University majoring in Computer Science
        </h2>
      </div>
    </div>
  );
}
