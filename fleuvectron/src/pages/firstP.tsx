import React, { useState, useEffect } from 'react';
import './pages.css';




const colorBands = [
  { color: 'black', value: 0 },
  { color: 'brown', value: 1 },
  { color: 'red', value: 2 },
  { color: 'orange', value: 3 },
  { color: 'yellow', value: 4 },
  { color: 'green', value: 5 },
  { color: 'blue', value: 6 },
  { color: 'violet', value: 7 },
  { color: 'gray', value: 8 },
  { color: 'white', value: 9 },
  { color: 'gold', multiplier: 0.1 },
  { color: 'silver', multiplier: 0.01 },
];

const FirstPage: React.FC = () => {
  const [bandAColor, setBandAColor] = useState<string>('black');
  const [bandBColor, setBandBColor] = useState<string>('black');
  const [bandCColor, setBandCColor] = useState<string>('black');
  const [multiplierColor, setMultiplierColor] = useState<string>('black');
  const [resistance, setResistance] = useState<string>('');

  useEffect(() => {
    calculateResistance();
  }, [bandAColor, bandBColor, bandCColor, multiplierColor]);

  const calculateResistance = () => {
    const bandAValue = colorBands.find(band => band.color === bandAColor)?.value || 0;
    const bandBValue = colorBands.find(band => band.color === bandBColor)?.value || 0;
    const bandCValue = colorBands.find(band => band.color === bandCColor)?.value || 0;
    const multiplier = colorBands.find(band => band.color === multiplierColor)?.multiplier || 1;
    const resistanceValue = ((bandAValue * 100 + bandBValue * 10 + bandCValue) * multiplier).toFixed(2);
    setResistance(`${resistanceValue} Ω`);
  };

  return (
    <div className="resistor-calculator">
      
      <h1>Resistor Color Code Calculator</h1>
      <div className="resistor">
        <div className="band" style={{ backgroundColor: bandAColor }}></div>
        <div className="band" style={{ backgroundColor: bandBColor }}></div>
        <div className="band" style={{ backgroundColor: bandCColor }}></div>
        <div className="band" style={{ backgroundColor: multiplierColor }}></div>
      </div>
      <div className="color-selector">
        <div>
          <label>Band A:</label>
          <select value={bandAColor} onChange={(e) => setBandAColor(e.target.value)}>
            {colorBands.map(band => <option key={band.color} value={band.color}>{band.color}</option>)}
          </select>
        </div>
        <div>
          <label>Band B:</label>
          <select value={bandBColor} onChange={(e) => setBandBColor(e.target.value)}>
            {colorBands.map(band => <option key={band.color} value={band.color}>{band.color}</option>)}
          </select>
        </div>
        <div>
          <label>Band C:</label>
          <select value={bandCColor} onChange={(e) => setBandCColor(e.target.value)}>
            {colorBands.map(band => <option key={band.color} value={band.color}>{band.color}</option>)}
          </select>
        </div>
        <div>
          <label>Multiplier:</label>
          <select value={multiplierColor} onChange={(e) => setMultiplierColor(e.target.value)}>
            {colorBands.map(band => <option key={band.color} value={band.color}>{band.color}</option>)}
          </select>
        </div>
      </div>
      <div className="result">
        {resistance && <p>Resistance: {resistance}</p>}
      </div>
    </div>
  );
};

export default FirstPage;

