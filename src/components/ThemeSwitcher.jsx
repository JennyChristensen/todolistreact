import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles.css";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher" onClick={toggleTheme}>
      {theme === "light" ? (
        <img src="./darkmode.png" alt="Sol" className="theme-icon" />
      ) : (
        <img src="./lightmode.png" alt="Måne" className="theme-icon" />
      )}
    </div>
  );
};
