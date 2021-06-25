const ButtonSection = ({ start, setStart }) => {
  return (
    <div className="container-lg p-0">
      <button style={{ width: "100%" }} onClick={() => setStart(start + 10)}>더보기</button>
    </div>
  )
}

export default ButtonSection;