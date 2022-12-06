import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
  {
    id: new Date().getSeconds(),
    description: "PengTing",
    significance: "7",
  },
];

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    AddToListReducer: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const { AddToListReducer } = listSlice.actions;

export default listSlice.reducer;

export const listSelector = (state) => state.list;
