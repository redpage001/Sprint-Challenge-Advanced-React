import React from 'react';
import {useDarkMode} from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  
  return (
    <nav className="navbar">
      <h1>Women's World Cup</h1>
      <div className="dark-mode__toggle">
          <button onClick={toggleMode}>Dark Mode</button>
      </div>
    </nav>
  );
};

export default Navbar;