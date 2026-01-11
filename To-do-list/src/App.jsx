import { useState } from 'react'
import './App.css'

// Task Manager Application
function App() {
  // State for new task input
  const [newItem, setNewItem] = useState("");
  // State for storing all tasks
  const [itemList, setItemList] = useState([]);

  // Add new task to the list
  const addItem = () => {
    if (newItem.trim() === "") return;
    setItemList([...itemList, newItem]);
    setNewItem("");
  }

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addItem();
  }

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <div className="input-section">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
        />
        <button onClick={addItem}>Add Task</button>
      </div>
      <ul className="task-list">
        {itemList.map((item, idx) => (
          <li key={idx} className="task-item">{item}</li>
        ))}
      </ul>
      {itemList.length > 0 && (
        <p className="task-count">{itemList.length} task(s) added</p>
      )}
    </div>
  )
}

export default App
