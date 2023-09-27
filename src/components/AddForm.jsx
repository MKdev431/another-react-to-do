import { useState } from "react";

export default function AddForm() {
  const [value, setValue] = useState("");

  const changeValue = e => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <form className="add-form">
      <input
        value={value}
        type="text"
        className="add-form__input"
        onChange={e => changeValue(e)}
      />
      <button className="add-form__btn">Add Task</button>
    </form>
  );
}
