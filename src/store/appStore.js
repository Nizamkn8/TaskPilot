import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "../features/tasks/taskSlice"

export const store = configureStore({
  reducer: {
    //Map the state name 'tasks' to the imported reducer function
    tasks: taskReducer
  },
})
