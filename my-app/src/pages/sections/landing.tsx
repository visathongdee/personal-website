import React from "react";
import "../../style.css";

export default function Landing() {
  return (
    <div className="landing-parent">
      <div className="landingContainer">
        {/* <div className="landingDiv"> */}
        <h2 style={{ color: "#f7768e", margin: "0px", textAlign: "left" }}>
          Hello, my name is
        </h2>
        <h1 style={{ fontSize: "60px", margin: "0px", textAlign: "left" }}>
          Visa Theerapatra Thongdee
        </h1>
        <h2
          style={{
            color: "#8589a7",
            margin: "0px",
            textAlign: "left",
          }}
        >
          I am a senior at Purdue University majoring in Computer Science
        </h2>
        {/* </div> */}
      </div>
    </div>
  );
}
