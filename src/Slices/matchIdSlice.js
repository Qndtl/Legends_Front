import { createSlice } from '@reduxjs/toolkit'

export const matchIdSlice = createSlice({
  name: "matchid",
  initialState: {
    matchId: []
  },
  reducers: {
    setMatchId: (state, action) => {
      state.matchId = action.payload.matchIds
    }
  }
})

export const { setMatchId } = matchIdSlice.actions;

export default matchIdSlice.reducer;