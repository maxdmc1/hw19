import React, { useState, useEffect } from "react";
import "./table.css";
import data from "../../data/employees.json";
import Form from "../Form";

console.log(data);

export default function Table({ props }) {
  const [employeeState, setEmployeeState] = useState({
    id: "",
    gender: "",
    title: "",
    first: "",
    last: "",
    email: "",
    date: "",
    age: 0,
    large: "",
    medium: "",
    thumbnail: ""
  });
  // useEffect(data => {
  //   setEmployeeState(...data);

  //   console.log(employeeState);
  // }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <button onClick={() => data.sortBy("first")}>First Name</button>
          </th>
          <th>
            <button onClick={() => data.sortBy("last")}>Last Name</button>
          </th>
          <th>E-Mail</th>
          <th>Gender</th>
          <th>
            <button onClick={() => data.sortBy("age")}>Age</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(data => (
          <tr key="id">
            <td>{data.first}</td>
            <td>{data.last}</td>
            <td>{data.email}</td>
            <td>{data.gender}</td>
            <td>{data.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// https://randomuser.me/api/?results=25&nat=gb,us&inc=gender,name,email,dob,picture
