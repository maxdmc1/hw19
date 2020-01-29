import React from "react";
import "./App.css";
import Table from "./components/table";
import Header from "./components/Header";
import data from "./data/employees.json";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Table />
    </div>
  );
}

export default App;
