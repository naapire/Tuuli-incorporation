// Header.js
import React from 'react';
import Lightmood from '../assets/desktop/lightmood.svg';
import Darkmood from '../assets/desktop/Darkmood.svg';
import HeaderImage from '../assets/desktop/bg-pattern-header.svg';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header
      className="w-full bg-cover bg-no-repeat h-32 flex justify-between items-center px-3"
      style={{ backgroundImage: `url(${HeaderImage})` }}
    >
      <div className="flex justify-between w-full px-6 items-center">
        <div className="text-white text-2xl font-semibold">devjobs</div>
        <div className="flex items-center gap-3">
          <div><img src={Lightmood} alt="Light Mode" /></div>
          <div className="relative w-14 h-7">
            <input
              type="checkbox"
              id="darkModeToggle"
              className="opacity-0 w-0 h-0"
              onChange={toggleDarkMode}
              checked={darkMode}
            />
            <label htmlFor="darkModeToggle" className="absolute cursor-pointer bg-white rounded-full w-full h-full transition-colors duration-300">
              <span className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-indigo-600 transition-transform duration-300 ${darkMode ? 'transform translate-x-7' : ''}`}></span>
            </label>
          </div>
          <div><img src={Darkmood} alt="Dark Mode" /></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
