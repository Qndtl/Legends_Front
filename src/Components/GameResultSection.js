import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../Axios/axios";
import { setGameResult } from "../Slices/gameResultSlice";
import OneGame from "./OneGame";

const GameResultSection = ({ setLoading }) => {
  const dispatch = useDispatch();
  const { matchId } = useSelector(state => state.matchId);
  const { gameResults } = useSelector(state => state.gameResult);

  useEffect(() => {
    const getGameResults = async () => {
      setLoading(true);
      const { data: { gameResults } } = await axios.post('/matchresult', { matchIds: matchId });
      dispatch(setGameResult({ gameResults }));
      setLoading(false);
    }
    getGameResults();
  }, [dispatch, matchId, setLoading])

  if (gameResults.length === 0) {
    return <div className="container-lg">
      <h1>Loading...</h1>
    </div>
  }
  if (gameResults.length !== 0) {
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