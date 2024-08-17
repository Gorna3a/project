// App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalculator, faRulerCombined, faCogs, faToolbox } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import FirstPage from './pages/firstP';
import SecondPage from './pages/secP';
import ThirdPage from './pages/thirdP';
import FourthPage from './pages/fourthP';
import logo from './assets/logo.svg';
import lightningIcon from './assets/asset1.svg'; // Import your lightning icon

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="container">
      <div className="menu-bar">
        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Menu
        </button>
        
        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <button className="close-button" onClick={() => setIsMenuOpen(false)}>Close</button>
          
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </li>
              <li>
                <Link to="/firstP" onClick={() => setIsMenuOpen(false)}>
                  <FontAwesomeIcon icon={faCalculator} /> Resistors
                </Link>
              </li>
              <li>
                <Link to="/secP" onClick={() => setIsMenuOpen(false)}>
                  <FontAwesomeIcon icon={faRulerCombined} /> Measure
                </Link>
              </li>
              <li>
                <Link to="/thirdP" onClick={() => setIsMenuOpen(false)}>
                  <FontAwesomeIcon icon={faCogs} /> Electrical and Electronic Components and Symbols
                </Link>
              </li>
              <li>
                <Link to="/fourthP" onClick={() => setIsMenuOpen(false)}>
                  <FontAwesomeIcon icon={faToolbox} /> Capacitor
                </Link>
              </li>
            </ul>
          </nav>
          {/* Lightning Icon at the bottom */}
          <a href="#" className="sidebar-icon" onClick={toggleTheme}>
            <img src={lightningIcon} alt="Lightning Icon" />
          </a>
        </div>
      </div>
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firstP" element={<FirstPage />} />
          <Route path="/secP" element={<SecondPage />} />
          <Route path="/thirdP" element={<ThirdPage />} />
          <Route path="/fourthP" element={<FourthPage />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className='logo-container'>
        <img src={logo} alt="App logo" className='logo'/>
      </div>
      <h1>Welcome to FLEUVECTRON Multimeter!</h1>
      <p>Click the "Menu" button to navigate through the pages.</p>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

