import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTaskForm from "../components/forms/AddTaskForm";
import {
  addTask,
  deleteTask,
  toggleComplete,
} from "../features/tasks/taskSlice";
import TodoList from "../features/tasks/TodoList";

const Tasks = () => {
  //read the task state from the store
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteTask(id));
  const handleToggle = (id) => dispatch(toggleComplete(id));
  const handleAdd = (title) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      isCompleted: false,
      priority: "Medium",
    };
    dispatch(addTask(newTask));
  };

  return (
    <div className="py-[80px] px-[40px]">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>

      {/* calling the form component */}
      <AddTaskForm onAdd={handleAdd} />

      {/* R - Read/Display: List of tasks */}
      <TodoList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
};

export default Tasks;
