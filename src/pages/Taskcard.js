
import React, { useState, useEffect } from 'react';
import '../tracker.css';
const TaskCard = ({ task, moveTask, deleteTask, editTask, assignPerson }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedPerson, setEditedPerson] = useState(task.assignedTo);
  // Fix: only run once when editing starts
  useEffect(() => {
    if (isEditing) {
      setEditedTitle(task.title);
      setEditedPerson(task.assignedTo);
    }
  }, [isEditing]);

  const handleSave = () => {
    if (editedTitle.trim()) {
      editTask(task.id, editedTitle);
      assignPerson(task.id, editedPerson);
      setIsEditing(false);
    }
  };

  return (
    <div className="task-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Edit Your Task"
          />
          <input
            type="text"
            value={editedPerson}
            onChange={(e) => setEditedPerson(e.target.value)}
            placeholder="Edit Assigner Name"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h2>Task: <span style={{fontWeight:'100'}}>{task.title}</span></h2>
          <h2>Assigned to:<span style={{fontWeight:'100'}}>{task.assignedTo}</span></h2>
        </>
      )}

      <div className="task-actions">
        {task.stage !== 'To Do' && <button onClick={() => moveTask(task.id, 'To Do')}>To Do</button>}
        {task.stage !== 'In Progress' && <button onClick={() => moveTask(task.id, 'In Progress')}>In Progress</button>}
        {task.stage !== 'Done' && <button onClick={() => moveTask(task.id, 'Done')}>Done</button>}
        <br/>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    </div>
  );
};

export default TaskCard;
