import { useSelector } from "react-redux";
import OneGameProfile from "./OneGameComponents/OneGameProfile";
import OneGameKDA from "./OneGameComponents/OneGameKDA";
import OneGameItems from "./OneGameComponents/OneGameItems";
import OneGameParticipants from './OneGameComponents/OneGameParticipants';

const OneGame = ({ gameResult }) => {
  const { puuid } = useSelector(state => state.summoner);
  const myParticipantIdx = gameResult.info.participants.findIndex(participant => participant.puuid === puuid);

  return (
    <div className="row row-cols-2 row-cols-md-4 text-light bg-dark border m-0 p-0">
      <OneGameProfile gameResult={gameResult} myParticipantIdx={myParticipantIdx} />
      <OneGameKDA gameResult={gameResult} myParticipantIdx={myParticipantIdx} />
      <OneGameItems gameResult={gameResult} myParticipantIdx={myParticipantIdx} />
      <OneGameParticipants gameResult={gameResult} />
    </div>
  )
}

export default OneGame;