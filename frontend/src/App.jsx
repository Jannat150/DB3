import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<TaskForm />} />
        <Route path="/item/:id" element={<TaskItem/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
