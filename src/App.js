

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import Main from "./pages/main";
import Tasktracker from "./pages/tasktracker";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />}/>
       <Route path="login" element={<LogIn/>}/>
        <Route path="signup" element={<SignUp />}/>
 <Route path="tasktracker" element={<Tasktracker/>}/>
        <Route path="main" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
);
}