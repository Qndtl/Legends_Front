import { createSlice } from '@reduxjs/toolkit';

export const summonerSlice = createSlice({
  name: "summoner",
  initialState: {
    summoner: localStorage.getItem("summoner"),
    puuid: localStorage.getItem("puuid"),
    id: localStorage.getItem("id")
  },
  reducers: {
    setSummoner: (state, action) => {
      localStorage.setItem('summoner', action.payload.summoner);
      localStorage.setItem('puuid', action.payload.puuid);
      localStorage.setItem('id', action.payload.id);
      state.summoner = action.payload.summoner;
      state.puuid = action.payload.puuid
      state.id = action.payload.id
    }
  }
})

export const { setSummoner } = summonerSlice.actions;

export default summonerSlice.reducer;