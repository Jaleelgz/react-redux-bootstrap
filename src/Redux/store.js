import { configureStore } from "@reduxjs/toolkit";
import BgColorReducer from "./BgColor/BgColorSlice";
import CountReducer from "./Count/CountSlice";
import TextColorReducer from "./TextColor/TextColorSlice";

export default configureStore({
  reducer: {
    BgColor: BgColorReducer,
    Count: CountReducer,
    TextColor: TextColorReducer,
  },
});
