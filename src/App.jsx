import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function updateTexts(event) {
    // const value = event.target.value
    // const name = event.target.name

    const { value, name } = event.target; // This code is for making the above 2 commented lines into one line.

    setContact((oldState) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: oldState.lName,
          email: oldState.email,
        };
      } else if (name === "lName") {
        return {
          fName: oldState.fName,
          lName: value,
          email: oldState.email,
        };
      } else if (name === "email") {
        return {
          fName: oldState.fName,
          lName: oldState.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={updateTexts}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={updateTexts}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={updateTexts}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
