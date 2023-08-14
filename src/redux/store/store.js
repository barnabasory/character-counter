import { configureStore } from "@reduxjs/toolkit";
import dropdownSlice from "../slices/dropdown";

const store = configureStore({
  reducer: {
    dropdown: dropdownSlice,
  },
});

export default store;
