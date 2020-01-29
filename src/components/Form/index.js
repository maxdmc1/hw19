import React, { useState } from "react";
import "./style.css";

function Form() {
  const [firstName, setFirstName] = useState("");

  return (
    <div>
      <p>Filter on First Name {firstName}</p>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={({ target }) => setFirstName(target.value)}
          type="text"
          placeholder="First Name"
        />

        <button
          onClick={event => {
            // Preventing the default behavior of the form submit (which is to refresh the page)
            event.preventDefault();

            // Alert the user their first and last name, clear `firstName` and `lastName`, clearing the inputs

            setFirstName("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
