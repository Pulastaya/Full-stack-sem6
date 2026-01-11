import { useState } from "react";
import "./App.css";

// Counter Application Component
function App() {
  // State for tracking the current value
  const [value, setValue] = useState(0);

  // Increment handler
  const increment = () => setValue(value + 1);

  // Decrement handler
  const decrement = () => setValue(value - 1);

  // Reset handler
  const reset = () => setValue(0);

  return (
    <div className="wrapper">
      <h1 className="display">Current Value: {value}</h1>
      <div className="controls">
        <button className="action-btn add" onClick={increment}>Add</button>
        <button className="action-btn subtract" onClick={decrement}>Subtract</button>
        <button className="action-btn clear" onClick={reset}>Clear</button>
      </div>
    </div>
  );
}

export default App;