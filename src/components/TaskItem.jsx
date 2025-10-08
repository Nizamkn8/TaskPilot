// src/components/TaskItem.jsx
import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  const itemClasses = `p-4 flex justify-between items-center rounded-md shadow transition duration-200
    ${task.isCompleted ? 'bg-green-100 line-through text-gray-500' : 'bg-white hover:shadow-lg'}`;

  return (
    <div className={itemClasses}>
      <div className="flex items-center">
        {/* U - Update: Toggle Completion */}
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task.id)}
          className="mr-4 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <span>{task.title}</span>
      </div>

      <div>
        {/* D - Delete: Remove Task */}
        <button
          onClick={() => onDelete(task.id)}
          className="ml-4 p-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
