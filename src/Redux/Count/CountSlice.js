import { createSlice } from "@reduxjs/toolkit";

export const CountSlice = createSlice({
  name: "Count",
  initialState: {
    value: 50,
  },
  reducers: {
    increase_count: (state, action) => {
      state.value = action.payload.count + state.value;
    },
    decrease_count: (state, action) => {
      state.value = -action.payload.count + state.value;
    },
  },
});

export const { increase_count, decrease_count } = CountSlice.actions;

export default CountSlice.reducer;
