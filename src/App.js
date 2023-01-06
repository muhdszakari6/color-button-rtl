import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setButtonColor(buttonColor === "red" ? "blue" : "red");
  };
  return (
    <div className="App">
      <button
        disabled={disabled}
        onClick={handleClick}
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
      >
        Change to {buttonColor === "red" ? "blue" : "red"}
      </button>
      <input
        value={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
        type="checkbox"
      ></input>
    </div>
  );
}

export default App;
