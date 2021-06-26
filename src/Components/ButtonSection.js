const ButtonSection = ({ start, setStart, loading }) => {
  return (
    <div className="container-lg p-0 d-flex">
      <button className="btn btn-secondary border"
        style={{ width: "100%" }}
        onClick={() => setStart(start - 10)}
        disabled={loading || start === 0}>
        {
          loading ? <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> : "이전"
        }
      </button>
      <button
        className="btn btn-secondary border"
        style={{ width: "100%" }}
        onClick={() => setStart(start + 10)}
        disabled={loading || start === 100}>
        {
          loading ? <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> : "다음"
        }
      </button>
    </div>
  )
}

export default ButtonSection;