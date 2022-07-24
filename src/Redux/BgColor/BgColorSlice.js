import { createSlice } from "@reduxjs/toolkit";

export const BgColorSlice = createSlice({
  name: "BgColor",
  initialState: {
    value: "red",
  },
  reducers: {
    change_bg_color: (state, action) => {
      state.value = action.payload.bgColor;
    },
  },
});

export const { change_bg_color } = BgColorSlice.actions;

export default BgColorSlice.reducer;
