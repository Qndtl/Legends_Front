import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "../Axios/axios";
import { setSummoner } from "../Slices/summonerSlice";

const Main = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onValid = async (data) => {
    const { data: { summonerInfos } } = await axios.post('/summoner', { summoner: data.summoner });
    dispatch(setSummoner({ summoner: summonerInfos.name, puuid: summonerInfos.puuid, id: summonerInfos.id }));
    history.push(`/result/${data.summoner}`, { profileIconId: summonerInfos.profileIconId });
  }

  return (
    <div style={{ height: "100vh" }} className="container d-flex justify-content-center align-items-center">
      <form className="d-flex" onSubmit={handleSubmit(onValid)}>
        <input className="form-control" {...register("summoner")} type="text" placeholder="Search Summoner..." />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  )
}

export default Main;