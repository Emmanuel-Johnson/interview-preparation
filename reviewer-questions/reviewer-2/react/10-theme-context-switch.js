import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ToggleTheme />
    </ThemeContext.Provider>
  );
}

function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1>{theme} mode</h1>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}