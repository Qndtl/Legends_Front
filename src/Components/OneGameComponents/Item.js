import '../../styles/OneGameItems.css';

const Item = ({ item }) => {
  return (
    <div className="col p-0 item">
      {
        item === 0 ?
          <div className="item rounded bg-secondary"></div> :
          <img className="item rounded"
            src={`http://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/${item}.png`}
            alt={item} />
      }
    </div>
  )
}

export default Item;