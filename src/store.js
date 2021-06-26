import { configureStore } from '@reduxjs/toolkit';
import gameResultReducer from './Slices/gameResultSlice';
import matchIdReducer from './Slices/matchIdSlice';

export default configureStore({
  reducer: {
    matchId: matchIdReducer,
    gameResult: gameResultReducer
  }
})