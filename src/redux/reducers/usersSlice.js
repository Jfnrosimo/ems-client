import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    errors: "",
  },
  reducers: {
    newUser: (state, action) => {
      axios
        .post("https://ems-api.onrender.com/api/v1/auth/register", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          ...action.payload.users,
        })
        .then((result) => {
          console.log({ createUser: result });
        })
        .catch((error) => {
          state.errors = { error };
        });
    },
    updateUser: (state, action) => {
      axios
        .patch(
          `https://ems-api.onrender.com/api/v1/users/${action.payload.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            ...action.payload.users,
          }
        )
        .then((result) => {
          console.log({ updateUser: result });
        })
        .catch((error) => {
          state.errors = error;
        });
    },
    deleteUser: (state, action) => {
      axios
        .put(`https://ems-api.onrender.com/api/v1/users/${action.payload.id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          status: "deleted",
        })
        .then((result) => {
          console.log({ deleteUser: result });
        })
        .catch((error) => {
          state.errors = error;
        });
    },
    fetchUsers: (state, action) => {
      state.users = [];
      state.users = action.payload.users;
    },
    fetchCurrentUser: (state, action) => {
      state.users = [];
      state.users = action.payload;
    },
    clearError: (state, dispatch) => {
      state.errors = "";
    },
  },
});

export const {
  newUser,
  updateUser,
  deleteUser,
  fetchUsers,
  fetchCurrentUser,
  clearErrors,
} = usersSlice.actions;

export default usersSlice.reducer;
