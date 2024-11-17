import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <ul className="mt-6 space-y-4">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      ) : (
        <li className="text-center text-gray-500">No tasks found</li>
      )}
    </ul>
  );
};

export default TaskList;
