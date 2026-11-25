
import { useState } from "react";

const Employee = () => {

  const [employees, setEmployees] = useState([
    { id: 1, name: "bhuvi", salary: 50000 },
    { id: 2, name: "dhanu", salary: 40000 },
    { id: 3, name: "moni", salary: 10000 },
    { id: 4, name: "anbu", salary: 20000 },
    { id: 5, name: "akash", salary: 30000 }
  ]);

  const [showFiltered, setShowFiltered] = useState(false);

  const filteredEmployees = employees.filter(
    (emp) => emp.salary > 40000
  );

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md w-2 md mx-auto mt-8" >
      <h1>Employee Details</h1>

      <button onClick={() => setShowFiltered(false)}>
        Show All Employees
      </button>

      <button onClick={() => setShowFiltered(true)}>
        Filter Salary Above 40000
      </button>

      {showFiltered ? (
        filteredEmployees.map((emp) => (
          <div key={emp.id}>
            <h3>Name: {emp.name}</h3>
            <p>Salary: {emp.salary}</p>
          </div>
        ))
      ) : (
        employees.map((emp) => (
          <div key={emp.id}>
            <h3>Name: {emp.name}</h3>
            <p>Salary: {emp.salary}</p>
          </div>
        ))
      )}

    </div>
  );
};

export default Employee
