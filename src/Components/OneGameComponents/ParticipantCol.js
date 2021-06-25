import "../../styles/ParticipantCol.css";
import { useDispatch } from "react-redux";
import axios from "../../Axios/axios";
import { resetGameResult } from "../../Slices/gameResultSlice";
import { setSummoner } from "../../Slices/summonerSlice";
import { useHistory } from "react-router-dom";

const ParticipantCol = ({ team }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = async (participant) => {
    dispatch(resetGameResult());
    const { data: { summonerInfos } } = await axios.post('/summoner', { summoner: participant.summonerName });
    dispatch(setSummoner({ summoner: summonerInfos.name, puuid: summonerInfos.puuid, id: summonerInfos.id }));
    history.push(`/result/${participant.summonerName}`, { profileIconId: summonerInfos.profileIconId });
  }

  return (
    <div className="col col-rows-5 m-0 d-flex flex-column justify-content-center align-items-center">
      {
        team.map(participant => {
          return <div key={participant.puuid} className="row m-0 d-flex my-1" style={{ width: "100%" }}>
            <div className="p-0">
              <div style={{ cursor: "pointer" }} onClick={() => onClick(participant)}>
                <img style={{ width: "22px", height: "22px" }} src={`http://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/${participant.championName}.png`} alt={participant.championName} />
                <span className="d-inline-block text-truncate rwidth align-middle">{participant.summonerName}</span>
              </div>
            </div>
          </div>
        })
      }
    </div >
  )
}

export default ParticipantCol;