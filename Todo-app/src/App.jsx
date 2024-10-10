import { useState } from 'react';
import './App.css'; // Ensure Tailwind CSS is imported here

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [error, setError] = useState(""); // Error state for validation

  const addTodo = () => {
    // Validation: Check if input is empty or contains only whitespace
    if (text.trim() === "") {
      setError("Todo cannot be empty!");
      return;
    }

    if (isEditing) {
      const updatedList = list.map((item, index) =>
        index === currentIndex ? text : item
      );
      setList(updatedList);
      setIsEditing(false);
      setText("");
    } else {
      setList([...list, text]);
      setText("");
    }

    setError(""); 
  };

  const deleteTodo = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  const editTodo = (index) => {
    setText(list[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-500 flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>

        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400"
            placeholder="Enter a todo..."
          />
          <button
            onClick={addTodo}
            className={`px-4 py-2 rounded-md text-white font-semibold ${
              isEditing ? 'bg-yellow-500' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <ul className="space-y-3">
          {list.map((item, index) => (
            <li
              key={index}
              className="bg-gray-100 rounded-lg flex justify-between items-center px-4 py-2 shadow"
            >
              <span className="text-lg">{item}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => editTodo(index)}
                  className="px-2 py-1 bg-black text-white rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded-lg"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
