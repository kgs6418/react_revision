import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeContextProvider({ children }) {
  let [theme, setTheme] = useState("light");
  function themeChanger() {
    setTheme((preTheme) => (preTheme === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, themeChanger }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeContextProvider;
