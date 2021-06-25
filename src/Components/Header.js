import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "../Axios/axios";
import { resetGameResult } from "../Slices/gameResultSlice";
import { setSummoner } from "../Slices/summonerSlice";

const Header = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onValid = async data => {
    dispatch(resetGameResult());
    const { data: { summonerInfos } } = await axios.post('/summoner', { summoner: data.summoner });
    dispatch(setSummoner({ summoner: summonerInfos.name, puuid: summonerInfos.puuid, id: summonerInfos.id }));
    history.push(`/result/${data.summoner}`, { profileIconId: summonerInfos.profileIconId });
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-lg">
        <div className="navbar-brand">DUK.GG</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto" onSubmit={handleSubmit(onValid)}>
            <input {...register('summoner', { required: true })} className="form-control me-2" type="search" placeholder="Search Summoner..." />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header;