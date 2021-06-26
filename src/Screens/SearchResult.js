import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatchIds } from "../Slices/matchIdSlice";
import GameResultSection from "../Components/GameResultSection";
import UserSection from "../Components/UserSection";
import ButtonSection from "../Components/ButtonSection";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const SearchResult = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [start, setStart] = useState(0);
  const { matchId, loading } = useSelector(state => state.matchId);

  useEffect(() => {
    dispatch(getMatchIds({ puuid: location.state.puuid, start }))
  }, [location.state.puuid, start, dispatch])

  return (
    <>
      <section>
        <UserSection profileIconId={location.state.profileIconId} />
      </section>
      <section>
        {
          loading ? <div className="container-lg">
            <h1>Loading...</h1>
          </div> : <GameResultSection matchId={matchId} />
        }
      </section>
      <section>
        <ButtonSection setStart={setStart} start={start} />
      </section>
    </>
  )
}

export default SearchResult;