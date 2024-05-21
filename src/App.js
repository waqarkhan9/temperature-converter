import "./App.css";
import { useState } from "react";

function App() {
  var [outputTemp, setoutputTemp] = useState(0);

  //fahrenheit to celsius
  const ftoC = (inputTemp) => {
    const result = ((inputTemp - 32) * 5) / 9;
    setoutputTemp(result.toFixed(3));
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

  return <div className="App">hello world</div>;
}

export default App;
