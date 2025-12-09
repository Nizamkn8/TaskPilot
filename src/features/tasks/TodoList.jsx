// src/components/TodoList.jsx
import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem"; // New Component
import Search from "../search/Search";

const TodoList = ({ tasks, onDelete, onToggle }) => {
  const [searchTerm,setSearchTerm] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-3">
      <Search onSearch={(value) => setSearchTerm(value)}/>

      {tasks.length === 0 ? (
        <p className="text-gray-500 italic">
          You have no tasks! Time to relax or add one.
        </p>
      ) : (
        filteredTasks.map((task) => (
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
