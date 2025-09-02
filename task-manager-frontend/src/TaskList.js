import React from 'react';

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li key={task.id} className="list-group-item d-flex align-items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task)}
            className="form-check-input me-2"
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="flex-grow-1">
            {task.title}
          </span>
          <button onClick={() => onDelete(task.id)} className="btn btn-danger btn-sm ms-2">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
