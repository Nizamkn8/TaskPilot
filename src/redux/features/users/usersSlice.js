import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list:[],
    visibleCount:5,
    selectedUser: null
  },

  reducers: {
    addUser: (state,action) => {
      state.list.push({id:Date.now(),...action.payload})
    },

    updateUser: (state,action) => {
      state.list = state.list.map(user =>
        user.id === action.payload.id ? action.payload : user
      );
    },

    selectUser: (state,action) => {
      state.selectedUser = action.payload
    },

    clearSelectedUser: (state) => {
      state.selectedUser = null
    },

    loadMoreUsers: (state) => {
      state.visibleCount += 5;
    }

  }
})

export const {
  addUser,
  updateUser,
  selectUser,
  clearSelectedUser,
  loadMoreUsers
} = usersSlice.actions;

export default usersSlice.reducer;
