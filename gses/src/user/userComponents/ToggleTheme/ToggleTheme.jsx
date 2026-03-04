import React, { useEffect, useState } from "react";
import "./ToggleTheme.css";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="toggleTheme">
      <button className="themeButton" onClick={toggleTheme}>
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ToggleTheme;
