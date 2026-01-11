import { useState } from "react";
import "./App.css";

// Appearance Switcher Component
function App() {
  // State for current display mode
  const [mode, setMode] = useState("light");

  // Toggle between light and dark modes
  const switchMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  // Check if dark mode is active
  const isDark = mode === "dark";

  return (
    <div className={`container ${mode}`}>
      <div className="content">
        <h1>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
        <p className="description">
          Currently viewing in {mode} mode. Click below to switch.
        </p>
        <button onClick={switchMode}>
          Switch to {isDark ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}

export default App;
