import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        placeholder="Add new task"
        className="form-control me-2"
      />
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
}

export default TaskForm;
