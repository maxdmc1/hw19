// import React, { useState } from "react";
// import "./style.css";
// import data from "../../data/employees.json";

// function Form() {
//   const [firstNameFilter, setFirstNameFilter] = useState("");

//   function filerByFirst() {
//     /**
//      * Filter array items based on search criteria (query)
//      */
//     const filterItems = (data, { firstNameFilter }) => {
//       return arr.filter(
//         el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//       );
//     };
//   }

//   return (
//     <div>
//       <p>Filter on First Name {firstNameFilter}</p>
//       <form className="form">
//         <input
//           value={firstNameFilter}
//           name="firstNameFilter"
//           onChange={({ target }) => setFirstNameFilter(target.value)}
//           type="text"
//           placeholder="First Name"
//           // during onChange - filter the state to include only names containing the letters in the input
//         />

//         <button
//           onClick={event => {
//             // Preventing the default behavior of the form submit (which is to refresh the page)
//             event.preventDefault();

//             // Alert the user their first and last name, clear `firstNameFilter` and `lastName`, clearing the inputs

//             setFirstNameFilter("");
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Form;
