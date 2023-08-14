import { createSlice } from "@reduxjs/toolkit";

const toggleMenu = {
  toggleMode: false,
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: toggleMenu,

  reducers: {
    On(state, action) {
      const newToggle = { ...state, toggleMode: true };
      return newToggle;
    },
    Off(state, action) {
      const newToggle = { ...state, toggleMode: false };
      return newToggle;
    },
  },
});

export default dropdownSlice.reducer;
export const { On, Off } = dropdownSlice.actions;
