import { createSlice } from "@reduxjs/toolkit";
import { lightTheme as Theme } from "../theme";

export const themeSlice = createSlice({
  name: "themeSelector",
  initialState: {
    Theme
  },
  reducers: {
    darkTheme: (state) => {
      state.darkmode = true;


    },
    lightTheme: (state) => {

      state.darkmode = false;

    }
  }

})


export const { darkTheme, lightTheme } = themeSlice.actions;

export default themeSlice.reducer;