import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Data {
  startDate: string;
  endDate: string;
  room: string;
  adult: string;
  children: string;
}

interface DataState {
  datas: Data[];
}

const initialState: DataState = {
  datas: [],
};
export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Data>) => {
      const { startDate, endDate, room, adult, children } = action.payload;

      const newData = {
        startDate,
        endDate,
        room,
        adult,
        children,
      };

      state.datas.push(newData);
    },
  },
});

export default DataSlice.reducer;
export const { setData } = DataSlice.actions;
