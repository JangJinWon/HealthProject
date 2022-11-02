import { createSlice } from "@reduxjs/toolkit"

export const CalendarToDo = createSlice({
  name: "CalendarToDo",
  initialState: {
    todo: "",
    todos: "",
    date: "",
  },
  reducers: {
    INSERT: (state, index, todo) => {
      return {
        ...state,
      }
    },
    DELETE: (state, date) => {},
  },
})

export const { INSERT, DELETE } = CalendarToDo.actions

export default CalendarToDo.reducer
