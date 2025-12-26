import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Function to add a task
  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput(''); // Clear input after adding
    }
  };

  // Function to toggle completion
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Task Master</h1>
      <div className="input-group">
        <input 
          type="text" 
          placeholder="What needs to be done?" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(task.id)}>
              {task.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              ×
            </button>
          </li>
        ))}
      </ul>
      
      {tasks.length > 0 && (
        <p className="footer">Total Tasks: {tasks.length}</p>
      )}
    </div>
  );
}

export default App;
