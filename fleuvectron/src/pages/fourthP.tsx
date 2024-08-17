import React, { useState } from "react";
import "./pages.css";
import "../App.css";

const FourthPage = () => {
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [capacitance, setCapacitance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateCapacitance = () => {
    const d1 = parseInt(digit1, 10);
    const d2 = parseInt(digit2, 10);
    const d3 = parseInt(digit3, 10);

    if (isNaN(d1) || isNaN(d2) || isNaN(d3)) {
      setError("Please enter valid numbers for all three digits.");
      setCapacitance(null);
      return;
    }

    const capacitanceValue = (d1 * 10 + d2) * Math.pow(10, d3);
    setCapacitance(capacitanceValue);
    setError(null);
  };

  return (
    <div className="fourth-page">
      <h1>Capacitor Code Calculator</h1>
      <div className="input-group">
        <input
          type="text"
          value={digit1}
          onChange={(e) => setDigit1(e.target.value)}
          maxLength={1}
          placeholder="Digit 1"
        />
        <input
          type="text"
          value={digit2}
          onChange={(e) => setDigit2(e.target.value)}
          maxLength={1}
          placeholder="Digit 2"
        />
        <input
          type="text"
          value={digit3}
          onChange={(e) => setDigit3(e.target.value)}
          maxLength={1}
          placeholder="Digit 3"
        />
      </div>
      <button className="calculate-button" onClick={calculateCapacitance}>
        Calculate
      </button>
      {error && <div className="error">{error}</div>}
      {capacitance !== null && (
        <div className="result">
          <p>Capacitance: {capacitance} pF</p>
        </div>
      )}
    </div>
  );
};

export default FourthPage;

