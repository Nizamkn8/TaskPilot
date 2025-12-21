import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: "t1",
      title: "Setup Redux Toolkit",
      description: "",
      isCompleted: true,
      priority: "High",
      deadline: ""
    },
    {
      id: "t2",
      title: "Implement Task List CRUD",
      description: "",
      isCompleted: false,
      priority: "Medium",
      deadline: ""
    }
  ],
};

const taskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    // Logic to add the task
    addTask: (state, action) => {
      // action.payload should be a full task object
      state.tasks.push(action.payload);
    },
    // Logic to delete the item which match the element by creating new array (payload is the task id)
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    // Logic to toggle completion (payload is the task id)
    toggleComplete: (state, action) => {
      const task = state.tasks.find((state) => state.id == action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    // for reordering the tasks
    reorderTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, deleteTask, toggleComplete, reorderTasks  } = taskSlice.actions;
export default taskSlice.reducer;
