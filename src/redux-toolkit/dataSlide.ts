import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    startDate: " ",
    endDate: "",
    adult: "",
    children: "",
    room: "",
  },

  reducers: {},
});
