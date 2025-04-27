// import React from "react";
// import TaskBoard from "./Taskboard";
// import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Task Tracker</h1>
//       <TaskBoard />
//     </div>
//   );
// }

// export default App;
                // SECOND CODE

// import React, { useState } from 'react';
// import './App.css';
// import TaskCard from './Taskcard';

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [taskInput, setTaskInput] = useState('');  // Task input state
//   const [assignedPerson, setAssignedPerson] = useState('');  // State to store person assigned to task

//   const people = ['Alice', 'Bob', 'Charlie'];  // List of people to assign to tasks

//   // Add a task
//   const addTask = () => {
//     if (taskInput.trim() === '') return;
//     const newTask = {
//       id: Date.now(),
//       title: taskInput,
//       stage: 'To Do',  // Default stage
//       assignedTo: assignedPerson || 'Unassigned',  // Default assignment
//     };
//     setTasks([...tasks, newTask]);
//     setTaskInput('');
//     setAssignedPerson('');
//   };

//   // Edit a task's title
//   const editTask = (taskId, newTitle) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, title: newTitle } : task
//     ));
//   };

//   // Assign person to task
//   const assignPerson = (taskId, person) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, assignedTo: person } : task
//     ));
//   };

//   // Move task to another stage
//   const moveTask = (taskId, newStage) => {
//     const updatedTasks = tasks.map(task =>
//       task.id === taskId ? { ...task, stage: newStage } : task
//     );
//     setTasks(updatedTasks);
//   };

//   // Delete a task
//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   // Group tasks by stage
//   const stages = ['To Do', 'In Progress', 'Done'];

//   return (
//     <div className="App">
//       <h1>Task Tracker</h1>
//       <input
//         type="text"
//         value={taskInput}
//         onChange={(e) => setTaskInput(e.target.value)}  // Update task title input
//         placeholder="New task..."
//       />
//       {/* <select 
//         value={assignedPerson} 
//         onChange={(e) => setAssignedPerson(e.target.value)}  // Assign person to task
//       >

//         <option value="">Assign to...</option>
//         {people.map(person => (
//           <option key={person} value={person}>{person}</option>
//         ))}
          
//       </select> */}

// <input
//         type="text"
//         value={assignedPerson}
//         onChange={(e) => setAssignedPerson(e.target.value)}  // Update task title input
//         placeholder="assigned..."
//       />
//       <button onClick={addTask}>Add Task</button>

//       <div className="board">
//         {stages.map(stage => (
//           <div key={stage} className="stage">
//             <h2>{stage}</h2>
//             {tasks.filter(task => task.stage === stage).map(task => (
//               <TaskCard
//                 key={task.id}
//                 task={task}
//                 moveTask={moveTask}
//                 deleteTask={deleteTask}
//                 editTask={editTask}
//                 assignPerson={assignPerson}
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

              // THIRD CODE
//               import React, { useState } from 'react';
// import './App.css';
// import TaskCard from './Taskcard';

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [taskInput, setTaskInput] = useState('');  // New task title input
//   const [assignedPerson, setAssignedPerson] = useState('');  // Person assigned to task

//   const people = ['Alice', 'Bob', 'Charlie'];

//   // Add a new task
//   const addTask = () => {
//     if (taskInput.trim() === '') return;
//     const newTask = {
//       id: Date.now(),
//       title: taskInput,
//       stage: 'To Do',
//       assignedTo: assignedPerson || 'Unassigned',
//     };
//     setTasks([...tasks, newTask]);
//     setTaskInput('');
//     setAssignedPerson('');
//   };

//   // Edit task title
//   const editTask = (taskId, newTitle) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, title: newTitle } : task
//     ));
//   };

//   // Assign person to task
//   const assignPerson = (taskId, person) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, assignedTo: person } : task
//     ));
//   };

//   // Move task to another stage
//   const moveTask = (taskId, newStage) => {
//     const updatedTasks = tasks.map(task =>
//       task.id === taskId ? { ...task, stage: newStage } : task
//     );
//     setTasks(updatedTasks);
//   };

//   // Delete a task
//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   // Group tasks by stage
//   const stages = ['To Do', 'In Progress', 'Done'];

//   return (
//     <div className="App">
//       <h1>Task Tracker</h1>
//       <input
//         type="text"
//         value={taskInput}
//         onChange={(e) => setTaskInput(e.target.value)}  // New task input
//         placeholder="New task..."
//       />
//       {/* <select
//         value={assignedPerson}
//         onChange={(e) => setAssignedPerson(e.target.value)}  // Assign person to task
//       >
//         <option value="">Assign to...</option>
//         {people.map(person => (
//           <option key={person} value={person}>{person}</option>
//         ))}
//       </select> */}
//       <input
//         type="text"
//         value={assignedPerson}
//         onChange={(e) => setAssignedPerson(e.target.value)}  // Update task title input
//         placeholder="assigned..."
//       />
//       <button onClick={addTask}>Add Task</button>

//       <div className="board">
//         {stages.map(stage => (
//           <div key={stage} className="stage">
//             <h2>{stage}</h2>
//             {tasks.filter(task => task.stage === stage).map(task => (
//               <TaskCard
//                 key={task.id}
//                 task={task}
//                 moveTask={moveTask}
//                 deleteTask={deleteTask}
//                 editTask={editTask}
//                 assignPerson={assignPerson}
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import Main from "./pages/main";
import Tasktracker from "./pages/tasktracker";
// import Sidebar  from "./pages/Sidebar";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />}/>
       <Route path="login" element={<LogIn/>}/>
        <Route path="signup" element={<SignUp />}/>
 <Route path="tasktracker" element={<Tasktracker/>}/>
        {/* <Route path='sidebar' element={<Sidebar/>}/> */}
        <Route path="main" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
);
}