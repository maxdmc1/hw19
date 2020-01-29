import React from "react";
import "./App.css";
import Table from "./components/table";
import Header from "./components/Header";
import data from "./data/employees.json";

function App() {
  return (
    <div className="App">
      <Header />

      <Table />
    </div>
  );
}

export default App;
