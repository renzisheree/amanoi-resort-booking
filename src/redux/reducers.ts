import { AnyAction } from "@reduxjs/toolkit";

const initialState = {
  data: {
    room: "1",
    startDate: "",
    endDate: "",
    adult: "1",
    children: "1",
  },
};

export default function dataReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
