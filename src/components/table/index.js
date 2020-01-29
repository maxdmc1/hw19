import React, { useState, useEffect } from "react";
import "./table.css";
import data from "../../data/employees.json";
import Form from "../Form";

console.log(data);

export default function Table({ props }) {
  const [employeeState, setEmployeeState] = useState(data);
  console.log("employeeState: ", employeeState); // this is logging the 25 employees as expected

  useEffect(() => {
    // setEmployeeState(data);
  }, [employeeState]);

  // sortByAge
  function sortByAge() {
    let sortedEmployees = [...data];
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
    let sortedEmployees = [...data];
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
    let sortedEmployees = [...data];
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

  return (
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
          <tr key="id">
            <td>{employeeState.first}</td>
            <td>{employeeState.last}</td>
            <td>{employeeState.email}</td>
            <td>{employeeState.gender}</td>
            <td>{employeeState.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// https://randomuser.me/api/?results=25&nat=gb,us&inc=gender,name,email,dob,picture
