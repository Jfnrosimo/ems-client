import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const typeSlice = createSlice({
  name: "types",
  initialState: {
    types: [],
  },
  reducers: {
    newType: (state, action) => {
      axios
        .post("https://ems-api-oyce.onrender.com/api/v1/types", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          ...action.payload.types,
        })
        .then((result) => {
          console.log({ createType: result });
        });
    },
    updateType: (state, action) => {
      axios
        .put(
          `https://ems-api-oyce.onrender.com/api/v1/types/${action.payload.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            ...action.payload.types,
          }
        )
        .then((result) => {
          console.log({ updateType: result });
        });
    },
    deleteType: (state, action) => {
      axios
        .put(
          `https://ems-api-oyce.onrender.com/api/v1/types/${action.payload.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            status: "deleted",
          }
        )
        .then((result) => {
          console.log({ deleteType: result });
        });
    },
    fetchtypes: (state, action) => {
      state.types = [];
      state.types = action.payload.types;
    },
  },
});

export const { newType, updateType, deleteType, fetchTypes } =
  typeSlice.actions;

export default typeSlice.reducer;
