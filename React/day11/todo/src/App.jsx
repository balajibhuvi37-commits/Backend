
import React, { useState } from "react";

const App = () => {


  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = task;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }

    setTask("");
  };

  const editTask = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((item, i) => i !== index));
  };
  

  return (
    <div className="container">
      <h1>Todo App</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
      />

      <button onClick={addTask}>
        {editIndex !== null ? "Update" : "Add Task"}
      </button>

      {todos.map((item, index) => (
        <div className="task" key={index}>
          <span>{item}</span>

          <div>
            <button onClick={() => editTask(index)}>
              Edit
            </button>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
            
          </div>
        </div>
      ))}
    </div>
  );
};



export default App;
