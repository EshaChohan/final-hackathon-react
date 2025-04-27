import React, { useState } from 'react';
import '../tracker.css';
import TaskCard from './Taskcard'

const Tasktracker = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');  // New task title input
  const [assignedPerson, setAssignedPerson] = useState('');  // Person assigned to task

  // Add a new task
  const addTask = () => {
    if (taskInput.trim() === '') return;
    const newTask = {
      id: Date.now(),
      title: taskInput,
      stage: 'To Do',
      assignedTo: assignedPerson || 'Unassigned',
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
    setAssignedPerson('');
  };

  // Edit task title
  const editTask = (taskId, newTitle) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, title: newTitle } : task
    ));
  };

  // Assign person to task
  const assignPerson = (taskId, person) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, assignedTo: person } : task
    ));
  };

  // Move task to another stage
  const moveTask = (taskId, newStage) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, stage: newStage } : task
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Group tasks by stage
  const stages = ['To Do', 'In Progress', 'Done'];

  return (
    <div className="tracker">
      <h1>Task Tracker Manager</h1>
      <h2>Create Your Tasks here</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}  // New task input
        placeholder="Create Your Task"
      />
      <input
        type="text"
        value={assignedPerson}
        onChange={(e) => setAssignedPerson(e.target.value)}  // Update task title input
        placeholder="Whom To Assign"
      />
      <button onClick={addTask}>Create Task</button>

      <div className="board">
        {stages.map(stage => (
          <div key={stage} className="stage">
            <h2>{stage}</h2>
            {tasks.filter(task => task.stage === stage).map(task => (
              <TaskCard
                key={task.id}
                task={task}
                moveTask={moveTask}
                deleteTask={deleteTask}
                editTask={editTask}
                assignPerson={assignPerson}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasktracker
