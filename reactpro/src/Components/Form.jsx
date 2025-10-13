import { useState } from "react";
export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          placeholder="Please enter your first name"
          value={name.firstName}
        />
        <input
          type="text"
          placeholder="last name"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <button onClick={(e) => handleClick(e)}>Add</button>
      </form>
    </div>
  );
}
