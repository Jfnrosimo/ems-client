import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const certificationSlice = createSlice({
  name: "certifications",
  initialState: {
    certifications: [],
  },
  reducers: {
    newCertification: (state, action) => {
      axios
        .post("https://ems-api-oyce.onrender.com/api/v1/certifications", {
          ...action.payload.certifications,
        })
        .then((result) => {
          console.log({ createCertification: result });
        });
    },
    updateCertification: (state, action) => {
      axios
        .put(
          `https://ems-api-oyce.onrender.com/api/v1/certifications/${action.payload.id}`,
          {
            headers: {},
            ...action.payload.certifications,
          }
        )
        .then((result) => {
          console.log({ updateCertification: result });
        });
    },
    deleteCertification: (state, action) => {
      axios
        .put(
          `https://ems-api-oyce.onrender.com/api/v1/certifications/${action.payload.id}`,
          {
            headers: {},
            status: "deleted",
          }
        )
        .then((result) => {
          console.log({ deleteCertification: result });
        });
    },
    fetchcertifications: (state, action) => {
      state.certifications = [];
      state.certifications = action.payload.certifications;
    },
  },
});

export const {
  newCertification,
  updateCertification,
  deleteCertification,
  fetchCertifications,
} = certificationSlice.actions;

export default certificationSlice.reducer;
