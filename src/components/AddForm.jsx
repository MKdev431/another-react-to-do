import { useState } from "react";

export default function AddForm({ onSubmit }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="add-form"
    >
      <input
        value={value}
        type="text"
        className="add-form__input"
        onChange={e => setValue(e.target.value)}
      />
      <button className="add-form__btn">Add Task</button>
    </form>
  );
}
