import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../Axios/axios';

export const getMatchIds = createAsyncThunk('matchid/getMatchIds', async (args) => {
  const result = await axios.post('/match', { puuid: args.puuid, start: args.start });
  return result.data;
})

export const matchIdSlice = createSlice({
  name: "matchid",
  initialState: {
    matchId: [],
    loading: true
  },
  reducers: {},
  extraReducers: {
    [getMatchIds.pending]: (state) => {
      state.loading = true;
    },
    [getMatchIds.fulfilled]: (state, action) => {
      state.matchId = action.payload.matchIds;
      state.loading = false;
    }
  }
})

export default matchIdSlice.reducer;