import React, { useState, useEffect } from "react";
import "./table.css";
import data from "../../data/employees.json";

console.log(data);

export default function Table({ props }) {
  const [employeeState, setEmployeeState] = useState(data);
  const [firstNameString, setFirstNameString] = useState("");
  console.log("employeeState: ", employeeState); // this is logging the 25 employees as expected
  console.log("other state of input: ", firstNameString);

  useEffect(() => {
    // setEmployeeState(data);
  }, [employeeState]);

  // sortByAge
  function sortByAge() {
    let sortedEmployees = [...employeeState];
    sortedEmployees.sort(function(a, b) {
      if (a.age < b.age) {
        return -1;
      }
      if (a.age > b.age) {
        return 1;
      }
      return 0;
    });
    setEmployeeState([...sortedEmployees]);
  }

  // sortByFirstName
  function sortByFirstName() {
    let sortedEmployees = [...employeeState];
    sortedEmployees.sort(function(a, b) {
      if (a.first < b.first) {
        return -1;
      }
      if (a.first > b.first) {
        return 1;
      }
      return 0;
    });
    setEmployeeState([...sortedEmployees]);
  }

  function sortByLastName() {
    let sortedEmployees = [...employeeState];
    sortedEmployees.sort(function(a, b) {
      if (a.last < b.last) {
        return -1;
      }
      if (a.last > b.last) {
        return 1;
      }
      return 0;
    });
    setEmployeeState([...sortedEmployees]);
  }

  const filterName = function() {
    setEmployeeState(
      employeeState.filter(employee =>
        employee.first.toLowerCase().includes(firstNameString.toLowerCase())
      )
    );
  };

  const reset = function() {
    setEmployeeState(data);
  };

  return (
    <div>
      <button onClick={reset} type="button">
        Reset Table of Employees
      </button>
      <form className="form">
        <input
          value={firstNameString}
          name="firstNameFilter"
          onChange={({ target }) => setFirstNameString(target.value)}
          type="text"
          placeholder="First Name"
          // during onChange - filter the state to include only names containing the letters in the input
        />
        <button onClick={filterName} type="button">
          Filter by letters in First Name
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>
              <button onClick={sortByFirstName}>First Name</button>
            </th>
            <th>
              <button onClick={sortByLastName}>Last Name</button>
            </th>
            <th>E-Mail</th>
            <th>Gender</th>
            <th>
              <button onClick={sortByAge}>Age</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {employeeState.map(employeeState => (
            <tr key={data.id}>
              <td>{employeeState.first}</td>
              <td>{employeeState.last}</td>
              <td>{employeeState.email}</td>
              <td>{employeeState.gender}</td>
              <td>{employeeState.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// https://randomuser.me/api/?results=25&nat=gb,us&inc=gender,name,email,dob,picture
