import { createSlice } from "@reduxjs/toolkit";

export const TextColorSlice = createSlice({
  name: "TextColor",
  initialState: {
    value: "Black",
  },
  reducers: {
    change_text_color: (state, action) => {
      state.value = action.payload.textColor;
    },
  },
});

export const { change_text_color } = TextColorSlice.actions;

export default TextColorSlice.reducer;
