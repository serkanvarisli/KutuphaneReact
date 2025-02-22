import React, { useState, useEffect } from "react";
import moon from "./assets/moon.png";
import sun from "./assets/sun.png";

function Darkmode() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    var icon = document.getElementById("icon");

    if (theme === "light") {
      setTheme("dark");
      icon.src = sun;
    } else {
      setTheme("light");
      icon.src = moon;
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <img src={sun} id="icon" className="image" onClick={toggleTheme} />
    </div>
  );
}

export default Darkmode;
