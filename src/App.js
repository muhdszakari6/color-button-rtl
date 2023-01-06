import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(color) {
  return color.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setButtonColor(
      buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed"
    );
  };
  return (
    <div className="App">
      <button
        disabled={disabled}
        onClick={handleClick}
        style={{ backgroundColor: disabled ? "gray" : buttonColor + "" }}
      >
        Change to
        {buttonColor === "MediumVioletRed"
          ? " Midnight Blue"
          : " Medium Violet Red"}
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
