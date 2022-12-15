import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const questionSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
  },
  reducers: {
    newQuestion: (state, action) => {
      axios
        .post("https://ems-api-oyce.onrender.com/api/v1/questions", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          ...action.payload.questions,
        })
        .then((result) => {
          console.log({ createQuestion: result });
        });
    },
    updateQuestion: (state, action) => {
      axios
        .put(
          `https://ems-api-oyce.onrender.com/api/v1/questions/${action.payload.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            ...action.payload.questions,
          }
        )
        .then((result) => {
          console.log({ updateQuestion: result });
        });
    },
    deleteQuestion: (state, action) => {
      axios
        .put(
          `https://ems-api-oyce.onrender.com/api/v1/questions/${action.payload.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            status: "deleted",
          }
        )
        .then((result) => {
          console.log({ deleteQuestion: result });
        });
    },
    fetchQuestions: (state, action) => {
      state.questions = [];
      state.questions = action.payload.questions;
    },
  },
});

export const { newQuestion, updateQuestion, deleteQuestion, fetchQuestions } =
  questionSlice.actions;

export default questionSlice.reducer;
