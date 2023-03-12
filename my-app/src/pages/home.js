import React from "react";
import "../style.css";
import { Button, theme } from "antd";
// import { useNavigate } from "react-router-dom";
import Landing from "./sections/landing";

const { useToken } = theme;

export default function Home() {
  const { token } = useToken();
  return (
    // <div className="centerComp">
    <div>
      <Landing />
    </div>
  );
}
