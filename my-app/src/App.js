import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider} from "antd";
import Home from "./pages/home";
import "./style.css";

function App() {
  // const theme = {
  //   token: {
  //     colorPrimary: "#1890ff",
  //   },
  // };
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
            {/* <Route path="/main" element={<Main />} /> */}
          </Routes>
        </Router>
      </ConfigProvider>
    </div>
  );
}

export default App;
