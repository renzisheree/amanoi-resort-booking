import { configureStore } from "@reduxjs/toolkit";
import { DataSlice } from "./dataSlices";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    data: DataSlice.reducer,
  },
});

export const useeAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
