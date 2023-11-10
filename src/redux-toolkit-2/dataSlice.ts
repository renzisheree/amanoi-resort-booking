import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  values: {
    startDate: string;
    endDate: string;
    room: string;
    adult: string;
    children: string;
  };
}

const initialState: DataState = {
  values: {
    startDate: "",
    endDate: "",
    room: "1",
    adult: "1",
    children: "1",
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<DataState["values"]>) {
      state.values = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
