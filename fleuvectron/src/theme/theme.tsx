// components/ThemeToggle.tsx
import React from 'react';
import lightningIcon from '../assets/asset1.svg'; // Adjust the path as necessary

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <img src={lightningIcon} alt="Toggle Theme" className={`icon ${theme}`} />
    </button>
  );
};

export default ThemeToggle;

