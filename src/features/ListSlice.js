import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: new Date().getSeconds(),
    description: "PengTing",
    significance: "7",
  },
];

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
});

export const {} = listSlice.actions;

export default listSlice.reducer;

export const listSelector = (state) => state.list;
