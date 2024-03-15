import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (!task) return; // Don't add empty tasks
    setTodos([...todos, task]);
    setTask(''); // Clear input after adding
  };

  const deleteTask = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <div className="todo-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
