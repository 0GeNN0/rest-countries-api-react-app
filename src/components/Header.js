import React from "react";

export default function Header({ isDark, toggleTheme }) {
  const headerStyle = {
    backgroundColor: isDark ? '#2b3945' : '#FFF',
    color: isDark ? '#FFF' : '#111517',
    boxShadow: isDark ? '0 0 10px #111517' : '0 0 10px #202c3752'
  };

  return (
    <header style={headerStyle}>
      <nav className="header container">
        <h1>Where in the world?</h1>

        {
          isDark ?
            <div className="toggle-theme" onClick={toggleTheme}>
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>Moon</title><path id="Moon" d="M24.86,15.53a.5.5,0,0,0-.57,0A10.71,10.71,0,0,1,9.57.79.5.5,0,0,0,9,0,12.77,12.77,0,1,0,25,16,.5.5,0,0,0,24.86,15.53Z" fill="#fff" /></svg>
              Light Mode
            </div>
            :
            <div className="toggle-theme" onClick={toggleTheme}>
              <svg id="i-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" />
              </svg>
              Dark Mode
            </div>
        }

      </nav>
    </header>
  );
}