import { createSlice } from '@reduxjs/toolkit';

export const summonerSlice = createSlice({
  name: "summoner",
  initialState: {
    summoner: "",
    puuid: "",
    id: ""
  },
  reducers: {
    setSummoner: (state, action) => {
      state.summoner = action.payload.summoner;
      state.puuid = action.payload.puuid
      state.id = action.payload.id
    }
  }
})

export const { setSummoner } = summonerSlice.actions;

export default summonerSlice.reducer;