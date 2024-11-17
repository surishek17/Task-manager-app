import React, { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      const newTask = {
        id: Date.now(),
        title: taskTitle,
        completed: false,
        date: new Date().toLocaleString(), // Store current date and time
      };
      onAddTask(newTask);
      setTaskTitle("");
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task title"
        className="border border-gray-300 rounded-md p-2 w-3/4 focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        onClick={handleAddTask}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
