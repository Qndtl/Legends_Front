import { configureStore } from '@reduxjs/toolkit';
import gameResultReducer from './Slices/gameResultSlice';
import matchIdReducer from './Slices/matchIdSlice';
import summonerReducer from './Slices/summonerSlice';

export default configureStore({
  reducer: {
    summoner: summonerReducer,
    matchId: matchIdReducer,
    gameResult: gameResultReducer
  }
})