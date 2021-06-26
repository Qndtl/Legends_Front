import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "../Axios/axios";
import { setMatchId } from "../Slices/matchIdSlice";
import GameResultSection from "../Components/GameResultSection";
import UserSection from "../Components/UserSection";
import ButtonSection from "../Components/ButtonSection";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const SearchResult = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMatchIds = async () => {
      const { data: { matchIds } } = await axios.post('/match', { puuid: location.state.puuid, start });
      dispatch(setMatchId({ matchIds }));
    }
    getMatchIds();
  }, [location.state.puuid, start, dispatch])

  return (
    <>
      <section>
        <UserSection profileIconId={location.state.profileIconId} />
      </section>
      <section>
        <GameResultSection setLoading={setLoading} />
      </section>
      <section>
        <ButtonSection setStart={setStart} start={start} loading={loading} />
      </section>
    </>
  )
}

export default SearchResult;