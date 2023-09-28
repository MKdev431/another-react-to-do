export default function Task({ completed, id, title, taskChecked, deleteTask }) {
  return (
    <div>
      <li className="task__item">
        <label>
          <input
            checked={completed}
            onChange={e => taskChecked(id, e.target.checked)}
            type="checkbox"
          />
          {title}
        </label>
        <button onClick={() => deleteTask(id)}>Delete</button>
      </li>
    </div>
  );
}
