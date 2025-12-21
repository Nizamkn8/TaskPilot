import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTaskForm from "../components/forms/AddTaskForm";
import {
  addTask,
  deleteTask,
  toggleComplete,
} from "../features/tasks/taskSlice";
import TodoList from "../features/tasks/TodoList";
import CreateTaskWizrd from "../components/taskWizard/CreateTaskWizrd";

const Tasks = () => {
  const [modalState, setModalState] = useState(false);

  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteTask(id));
  const handleToggle = (id) => dispatch(toggleComplete(id));
  const handleAdd = (title) => {
    dispatch(
      addTask({
        id: Date.now().toString(),
        title,
        isCompleted: false,
        priority: "Medium",
      })
    );
  };

  return (
    <div className="py-[80px] px-[40px]">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>

      <AddTaskForm onAdd={handleAdd} />

      <TodoList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />

      <div className="mt-6 flex gap-3">
        {/* Primary Action */}
        <button
          onClick={() => setModalState(true)}
          className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition"
        >
          + Add Multi-Step Task
        </button>

        {/* Secondary Action */}
        {modalState && (
          <button
            onClick={() => setModalState(false)}
            className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        )}
      </div>

      {modalState && (
        <CreateTaskWizrd
          modalOpen={modalState}
          modalClose={() => setModalState(false)}
        />
      )}
    </div>
  );
};

export default Tasks;
