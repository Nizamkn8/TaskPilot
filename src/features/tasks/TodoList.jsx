// src/components/TodoList.jsx
import React from "react";
import TaskItem from "./TaskItem"; // New Component

const TodoList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <p className="text-gray-500 italic">
          You have no tasks! Time to relax or add one.
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
