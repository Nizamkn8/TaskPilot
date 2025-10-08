import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: 't1', title: 'Setup Redux Toolkit', isCompleted: true, priority: 'High' },
    { id: 't2', title: 'Implement Task List CRUD', isCompleted: false, priority: 'Medium' },
  ]
}

const taskSlice = createSlice({
  name:"Task",
  initialState,
  reducers: {
    // Logic to add the task
    addTask: (state,action) => {
      state.tasks.push(action.payload)
    },
    // Logic to delete the item which match the element by creating new array (payload is the task id)
    deleteTask: (state,action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload );
    },
    // Logic to toggle completion (payload is the task id)
    toggleComplete: (state,action) => {
      const task = state.tasks.find(state => state.id == action.payload);
      if(task) {
        task.isCompleted == !task.isCompleted
      }
    }
  }
})

export const { addTask, deleteTask, toggleComplete } = taskSlice.actions;
export default taskSlice.reducer;
