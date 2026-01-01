export default function Card(props) {    
  return (
    <div className="card">
      <div className="top">
        <span>{props.hero.city}</span>
        <span className="affiliation">{props.hero.affiliation}</span>
      </div>
      <img src={props.hero.image} alt="" />
      <h2>{props.hero.name}</h2>
      <em>{props.hero.power}</em>
      <h3>{props.hero.realName}</h3>
      <div className="stats">
        <p>Strength: <span>{props.hero.stats.strength}</span></p>
        <p>Speed: <span>{props.hero.stats.speed}</span></p>
        <p>Intelligence: <span>{props.hero.stats.intelligence}</span></p>
        <p>Durability: <span>{props.hero.stats.durability}</span></p>
      </div>
      <h4 className={props.hero.isActive?`active`:``}>{props.hero.isActive?`Active`:`Inactive`}</h4>
    </div>
  );
}
