import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../Axios/axios";
import { setMatchId } from "../Slices/matchIdSlice";
import GameResultSection from "../Components/GameResultSection";
import UserSection from "../Components/UserSection";
import ButtonSection from "../Components/ButtonSection";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const SearchResult = () => {
  const { state: { profileIconId } } = useLocation();
  const { puuid } = useSelector(state => state.summoner);
  const dispatch = useDispatch();
  const [start, setStart] = useState(0);

  useEffect(() => {
    const getMatchIds = async () => {
      const { data: { matchIds } } = await axios.post('/match', { puuid, start });
      dispatch(setMatchId({ matchIds }));
    }
    getMatchIds();
  }, [puuid, start, dispatch])

  return (
    <>
      <section>
        <UserSection profileIconId={profileIconId} />
      </section>
      <section>
        <GameResultSection />
      </section>
      <section>
        <ButtonSection setStart={setStart} start={start} />
      </section>
    </>
  )
}

export default SearchResult;