
import { createSlice } from "@reduxjs/toolkit";

const today = new Date()

export const Calendar = createSlice({
  name: "Calendar",
  initialState: {
    year: today.getFullYear(),
    month: today.getMonth(),
    modal: {
      index: '',
      schedule: []
    },


  },
  reducers: {
    INCREMENT: (state) => {

      if (state.month < 11) {
        return { ...state, "month": state.month + 1 }
      }
      // 12월을 넘길 경우 Year + 1
      else {
        return { ...state, "year": state.year + 1, "month": 0 }
      }


    },
    DECREMENT: (state) => {

      if (state.month > 0) {
        return { ...state, "month": state.month - 1 }
      }
      // 1월 보다 작을 경우 Year - 1
      else {
        return { ...state, "year": state.year - 1, "month": 11 }
      }

    },
    MODAL: (state, key) => {

      return {
        ...state, modal: {
          ...state.modal,
          index: key.payload
        }
      }
    },
    MODALCOLOR: (state) => {
      return {
        ...state, checked: true
      }

    },
    MODAL_END_DATE: (state) => {


    },
    MODAL_SELECT_DATE: (state) => {


    },
    MODALENDDATE: (state) => {


    },


  }

})


export const { INCREMENT, DECREMENT, MODAL, MODALCHECK, MODAL_END_DATE, MODAL_SELECT_DATE } = Calendar.actions;


export default Calendar.reducer;