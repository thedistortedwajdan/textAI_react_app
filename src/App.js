// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import About from "./components/About";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  // document.body.style.backgroundColor = "#c7c7c7";
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(22 40 56)";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="textAI" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Textform
          heading="Enter Text"
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
