import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const choiceSlice = createSlice({
  name: "choices",
  initialState: {
    choices: [],
  },
  reducers: {
    newChoice: (state, action) => {
      axios
        .post("https://ems-api.onrender.com/api/v1/choices", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          ...action.payload.choices,
        })
        .then((result) => {
          console.log({ createChoice: result });
        });
    },
    updateChoice: (state, action) => {
      axios
        .put(
          `https://ems-api.onrender.com/api/v1/choices/${action.payload.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            ...action.payload.choices,
          }
        )
        .then((result) => {
          console.log({ updateChoice: result });
        });
    },
    deleteChoice: (state, action) => {
      axios
        .put(
          `https://ems-api.onrender.com/api/v1/choices/${action.payload.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            status: "deleted",
          }
        )
        .then((result) => {
          console.log({ deleteChoice: result });
        });
    },
    fetchchoices: (state, action) => {
      state.choices = [];
      state.choices = action.payload.choices;
    },
  },
});

export const { newChoice, updateChoice, deleteChoice, fetchChoices } =
  choiceSlice.actions;

export default choiceSlice.reducer;
