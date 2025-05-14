import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Home from "./pages/home";
import "./style.css";
import { useEffect } from "react";
import Favicon from "./pages/images/V.png";

function App() {
  useEffect(() => {
    document.title = "Visa Thongdee";
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = { Favicon };
  }, []);

  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: "#F6F6F6",
            colorPrimary: "#F7768E",
            primary: "#343B58",
            primaryDark: "#24283B",
            primaryLight: "#8589A7",
            lightPink: "#FAA9BB",
            darkPink: "#F7768E",
          },
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ConfigProvider>
    </div>
  );
}

export default App;
