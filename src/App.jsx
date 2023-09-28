import { useState } from "react";

import AddForm from "./components/AddForm";
import SearchForm from "./components/SearchForm";
import TaskList from "./components/TaskList";

import "./App.scss";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(title) {
    setTasks(currentTasks => [...currentTasks, { id: crypto.randomUUID(), title, completed: false }]);
  }

  function taskChecked(id, completed) {
    setTasks(currentTasks => {
      return currentTasks.map(task => {
        if (task.id === id) return { ...task, completed };
        return task;
      });
    });
  }

  function deleteTask(id) {
    setTasks(currentTasks => {
      return currentTasks.filter(task => {
        if (task.id !== id) {
          return task;
        }
      });
    });
  }

  return (
    <div className="app">
      <h1 className="app__title">To-do List</h1>
      <AddForm onSubmit={addTask} />
      <SearchForm />
      <h2>tasks:</h2>
      <TaskList
        tasks={tasks}
        taskChecked={taskChecked}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
