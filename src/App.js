import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [searchQuery, setSearchQuery] = useState("");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

   // Filter tasks based on the search query
   const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        <TaskInput onAddTask={addTask} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TaskList
          tasks={filteredTasks}
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
