import Task from "./Task";

export default function TaskList({ tasks, taskChecked, deleteTask }) {
  return (
    <ul className="task__list">
      {tasks.map(task => (
        <Task
          {...task}
          key={task.id}
          taskChecked={taskChecked}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
