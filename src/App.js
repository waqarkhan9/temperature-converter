import "./App.css";
import { useState } from "react";

function App() {
  var [outputTemp, setoutputTemp] = useState(0);

  //fahrenheit to celsius
  const ftoC = (inputTemp) => {
    const result = ((inputTemp - 32) * 5) / 9;
    setoutputTemp(result.toFixed(3));
    console.log(result);
  };

  //fahrenheit to kelvin
  const ftoK = (inputTemp) => {
    const result = ((Number(inputTemp) - 32) * 5) / 9 + 273.15;
    setoutputTemp(result.toFixed(3));
  };

  // celsius to fahrenheit
  const ctoF = (inputTemp) => {
    const result = Number(inputTemp) + 273;
    setoutputTemp(result.toFixed(3));
  };

  // celsius to kelvin
  const ctoK = (inputTemp) => {
    const result = Number(inputTemp) + 273.15;
    setoutputTemp(result.toFixed(3));
  };

  //kelvin to celsius
  const ktoC = (inputTemp) => {
    const result = Number(inputTemp) - 273.15;
    setoutputTemp(result.toFixed(3));
  };

  //kelvin to fahrenheit
  const ktoF = (inputTemp) => {
    const result = ((Number(inputTemp) - 273.15) * 9) / 5 + 32;
    setoutputTemp(result.toFixed(3));
  };

  //handles the click of button
  const handleChange = () => {
    var inputTemp = document.getElementById("inputTemp");

    //console.log("input temp", typeof inputTemp);
    // console.log("input number", typeof inputNumber);
    var unit = document.getElementById("units");
    if (unit.value === "ftoc") {
      ftoC(inputTemp.value);
    }
    if (unit.value === "ftok") {
      ftoK(inputTemp.value);
    }
    if (unit.value === "ctof") {
      ctoF(inputTemp.value);
    }
    if (unit.value === "ctok") {
      ctoK(inputTemp.value);
    }
    if (unit.value === "ktoc") {
      ktoC(inputTemp.value);
    }
    if (unit.value === "ktof") {
      ktoF(inputTemp.value);
    }
  };
  const handleReset = () => {
    setoutputTemp((outputTemp = 0));
    document.getElementById("inputTemp").value = "";
  };

  return (
    <div className="App">
      <div className="title">Temperature Converter</div>
      <div className="input">
        <input className="tempinput" type="number" id="inputTemp"></input>
      </div>
      <div className="conversionlist">
        <select className="dropdown" id="units">
          <option value="ftoc">Fahrenheit to Celsius</option>
          <option value="ftok">Fahrenheit to kelvin</option>
          <option value="ctof">Celsius to Fahrenheit</option>
          <option value="ctok">Celsius to kelvin</option>
          <option value="ktoc">kelvin to Celsius</option>
          <option value="ktof">kelvin to Fahrenheit</option>
        </select>
      </div>
      <div>
        <button onClick={handleChange}>convert</button>
      </div>
      <div className="outputTemp"> {outputTemp}</div>
    </div>
  );
}

export default App;
