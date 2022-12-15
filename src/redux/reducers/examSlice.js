import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const examSlice = createSlice({
  name: "exams",
  initialState: {
    exams: [],
  },
  reducers: {
    newExam: (state, action) => {
      axios
        .post("https://ems-api-oyce.onrender.com/api/v1/exams", {
          // headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          ...action.payload.exams,
        })
        .then((result) => {
          console.log({ createExam: result });
        });
    },
    updateExam: (state, action) => {
      axios
        .put(
          `https://ems-api-oyce.onrender.com/api/v1/exams/${action.payload.id}`,
          {
            // headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            ...action.payload.exams,
          }
        )
        .then((result) => {
          console.log({ updateExam: result });
        });
    },
    deleteExam: (state, action) => {
      axios
        .put(
          `https://ems-api-oyce.onrender.com/api/v1/exams/${action.payload.id}`,
          {
            // headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            status: "deleted",
          }
        )
        .then((result) => {
          console.log({ deleteExam: result });
        });
    },
    fetchexams: (state, action) => {
      state.exams = [];
      state.exams = action.payload.exams;
    },
  },
});

export const { newExam, updateExam, deleteExam, fetchExams } =
  examSlice.actions;

export default examSlice.reducer;
