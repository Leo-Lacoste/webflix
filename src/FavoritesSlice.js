import { createSlice } from "@reduxjs/toolkit";

export const { reducer, actions } = createSlice({
  name: "favorites",
  initialState: [],
  reducers: { toggle: (state, action) => state.includes(action.id) },
});
