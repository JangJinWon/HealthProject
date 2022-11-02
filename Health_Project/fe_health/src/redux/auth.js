import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLogin: false,
}

export const auth = createSlice({
  name: "authentificate",
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true
    },
    logout(state) {
      state.isLogin = false
    },
  },
})

export const authAction = auth.actions
export default auth.reducer
