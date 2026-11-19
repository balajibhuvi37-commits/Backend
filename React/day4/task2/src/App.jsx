
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Dashboard from "./Pages/Dashboard";
import Courses from "./Pages/Course";
import Assignments from "./Pages/Assignment";
import Profile from "./Pages/Profile";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
