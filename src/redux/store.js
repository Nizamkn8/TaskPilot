import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';
import taskReducer from "../features/tasks/taskSlice"
import usersReducer from "../redux/features/users/usersSlice"

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, taskReducer);
const persistedReducerUsers = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
  reducer: {
    //Map the state name 'tasks' to the imported reducer function
    tasks: persistedReducer,
    users: persistedReducerUsers,
  },
})

export const persistor = persistStore(store);
