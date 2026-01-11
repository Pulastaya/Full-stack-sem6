
import { useState } from "react";
import "./App.css";

// User Registration Form Component
export default function App() {

  // State to store user input data
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    gender: "Male",
    age: "",
  });

  // State to store saved form data after submission
  const [savedInfo, setSavedInfo] = useState(null);

  // Update individual field in userInfo state
  const updateField = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const saveForm = (e) => {
    e.preventDefault();
    setSavedInfo(userInfo);
    setUserInfo({ name: "", email: "", gender: "Male", age: "" });
  };

  return (
    <div className="form-container">
      <h1>User Registration</h1>
      <form onSubmit={saveForm}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={updateField}
            required
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={updateField}
            required
          />
        </label>

        <label>
          Gender:
          <select name="gender" value={userInfo.gender} onChange={updateField}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={userInfo.age}
            onChange={updateField}
            min="1"
            max="120"
            required
          />
        </label>

        <button type="submit">Register</button>
      </form>

      {savedInfo && (
        <div className="output-section">
          <h2>Registration Details</h2>
          <p>
            <strong>Name:</strong> {savedInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {savedInfo.email}
          </p>
          <p>
            <strong>Gender:</strong> {savedInfo.gender}
          </p>
          <p>
            <strong>Age:</strong> {savedInfo.age}
          </p>
        </div>
      )}
    </div>
  );
}
