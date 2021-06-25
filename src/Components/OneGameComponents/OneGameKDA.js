import MultipleKill from "./MultipleKill";

const OneGameKDA = ({ gameResult, myParticipantIdx }) => {
  const myInfo = gameResult?.info?.participants[myParticipantIdx];
  return (
    <div className="col d-flex flex-column justify-content-center align-items-center m-0 p-0">
      <MultipleKill kills={myInfo?.largestMultiKill} />
      <div className="my-2">
        <span className="fs-5">{myInfo?.kills}/</span>
        <span className="fs-5 text-danger">{myInfo?.deaths}</span>
        <span className="fs-5">/{myInfo?.assists}</span>
      </div>
      {myInfo?.deaths === 0 ? <span>Perfect</span> : <span className="ms-1">{((myInfo?.kills + myInfo?.assists) / myInfo?.deaths).toFixed(2)} 평점</span>}
    </div>
  )
}

export default OneGameKDA;