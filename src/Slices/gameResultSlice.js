import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../Axios/axios';

export const getGameResults = createAsyncThunk('gameResult/getGameResults', async (args) => {
  const result = await axios.post('/matchresult', { matchIds: args });
  return result.data.gameResults;
})

export const gameResultSlice = createSlice({
  name: "gameResult",
  initialState: {
    gameResults: [],
    loading: true
  },
  reducers: {
    resetGameResult: (state) => {
      state.gameResults = [];
      state.loadin = true
    }
  },
  extraReducers: {
    [getGameResults.pending]: (state) => {
      state.loading = true;
    },
    [getGameResults.fulfilled]: (state, { payload }) => {
      state.gameResults = payload;
      state.loading = false;
    }
  }
})

export const { resetGameResult } = gameResultSlice.actions;

export default gameResultSlice.reducer;