import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

const API_URL = 'http://localhost:8080/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then(res => setTasks(res.data));
  }, []);

  const addTask = title => {
    axios.post(API_URL, { title, completed: false }).then(res => setTasks([...tasks, res.data]));
  };

  const toggleCompleted = task => {
    axios.put(`${API_URL}/${task.id}`, { ...task, completed: !task.completed })
      .then(res => setTasks(tasks.map(t => t.id === res.data.id ? res.data : t)));
  };

  const deleteTask = id => {
    axios.delete(`${API_URL}/${id}`).then(() => setTasks(tasks.filter(t => t.id !== id)));
  };

  return (
    <div className="container" style={{ maxWidth: 500, margin: '40px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8, background: '#fafafa' }}>
      <h1 className="text-center mb-4">Task Manager Lite</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleCompleted} onDelete={deleteTask} />
    </div>
  );
}

export default App;
