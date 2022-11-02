
import { createSlice } from "@reduxjs/toolkit";


export const ModalTFselector = createSlice({
  name: "ModalTFselector",
  initialState: {
    signup: true
  },
  reducers: {
    signUpTrue: (state) => {
      state.signup = true


    },



  }

})


export const { signUpTrue } = ModalTFselector.actions;


export default ModalTFselector.reducer;