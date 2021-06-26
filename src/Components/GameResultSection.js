import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameResults } from "../Slices/gameResultSlice";
import OneGame from "./OneGame";

const GameResultSection = ({ matchId }) => {
  const dispatch = useDispatch();
  const { gameResults, loading } = useSelector(state => state.gameResult);

  useEffect(() => {
    dispatch(getGameResults(matchId));
  }, [dispatch, matchId])

  if (loading) {
    return <div className="container-lg">
      <h1>Loading...</h1>
    </div>
  }
  if (!loading) {
    return (
      <div className="container-lg">
        <div className="row row-cols row-cols-xl-2">
          {gameResults.map(gameResult => <OneGame key={gameResult.info.gameId} gameResult={gameResult} />)}
        </div>
      </div>
    )
  }
}

export default GameResultSection;