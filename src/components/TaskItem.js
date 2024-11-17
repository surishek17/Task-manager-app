import React from "react";

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <li
      className={`flex justify-between items-center p-4 rounded-md ${
        task.completed ? "bg-green-200 line-through" : "bg-white"
      } shadow-md`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="mr-4"
        />
        <span className="flex-1">{task.title}</span>
      </div>

      <div className="flex items-center">
        <span className="text-sm text-gray-500 mr-4">{task.date}</span>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
