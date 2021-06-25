import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    page: 1
  },
  reducers: {
    addPage: (state, action) => {
      state.page += 1
    },
    subPage: (state, action) => {
      state.page -= 1
      if (state.page === 1) {
        state.page = -1
      }
    }
  }
})

export const { addPage, subPage } = pageSlice.actions;

export default pageSlice;