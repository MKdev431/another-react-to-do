import AddForm from "./components/AddForm";
import SearchForm from "./components/SearchForm";
import Task from "./components/Task";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">To-do List</h1>
      <AddForm />
      <SearchForm />
      <Task />
    </div>
  );
}

export default App;
