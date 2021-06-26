import { createSlice } from '@reduxjs/toolkit'

export const gameResultSlice = createSlice({
  name: "gameResult",
  initialState: {
    gameResults: []
  },
  reducers: {
    setGameResult: (state, action) => {
      state.gameResults = action.payload.gameResults
    },
    resetGameResult: (state) => {
      state.gameResults = []
    }
  }
})

export const { setGameResult, resetGameResult } = gameResultSlice.actions;

export default gameResultSlice.reducer;