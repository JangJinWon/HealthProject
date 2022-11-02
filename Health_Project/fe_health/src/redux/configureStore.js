import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./themeSelector"
import calendarReducer from "./calendar"
import modalTFReducer from "./modalTFselector"
import calendarToDoReducer from "./calendarToDo"
import authReducer from "./auth"

export default configureStore({
  reducer: {
    theme: themeReducer,
    calendar: calendarReducer,
    modalTFselector: modalTFReducer,
    calendarToDo: calendarToDoReducer,
    authentificate: authReducer,
  },
})
