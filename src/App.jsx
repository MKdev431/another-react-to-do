import { useState } from "react";

import AddForm from "./components/AddForm";
import SearchForm from "./components/SearchForm";
import TaskList from "./components/TaskList";

import "./App.scss";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(title) {
    setTasks(currentTasks => {
      return [...currentTasks, { id: crypto.randomUUID(), title, completed: false }];
    });
  }

  return (
    <div className="app">
      <h1 className="app__title">To-do List</h1>
      <AddForm onSubmit={addTask} />
      <SearchForm />
      <h2>tasks:</h2>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
